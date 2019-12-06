import React,{useState} from 'react';


function App() {
  let [items, setItems] = useState();

  let [list, setList] = useState([]);

  function handleInput(event) {
    //console.log(event.target.value);
    let item = event.target.value;
    setItems(item);
  }

  function addList(event) {
    //list = items;
    console.log(list);
    setList(function(prev) {
      return [...prev, items];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(function(items) {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
