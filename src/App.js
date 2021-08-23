import { useCallback, useEffect, useState } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import './App.css';

const LIST_SIZE = 50;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < LIST_SIZE; i = i + 1) {
      list.push(`${i}`);
    }

    setItems(list);
  }, []);

  const rowRenderer = useCallback(
    ({ key, index, isScrolling, style }) => {
      return (
        <div key={key} style={style}>
          {isScrolling ? <h1>Loading...</h1> : <h1>{items[index]}</h1>}
        </div>
      );
    },
    [items],
  );

  return (
    <div className="App">
      <AutoSizer>
        {({ width, height }) => (
        <List
          id="items"
          width={width}
          height={height}
          rowCount={items.length}
          rowHeight={100}
          rowRenderer={rowRenderer}
        />
      )}
      </AutoSizer>
    </div>
  );
}

export default App;
