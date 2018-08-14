import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const listOfStuff = Array.from({length:32}).map(() =>
    Math.floor(Math.random() * Math.floor(100))
  );
  return (
    <div className="App">
      <label>Foo</label>
      <input type="text" name="foo" />
      {listOfStuff.map(x => (
        <p>
          <label>Foo{x}</label>
          <input type="text" name={"foo"+x} />
        </p>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
