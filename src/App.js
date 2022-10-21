import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const Todowrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  background-color: skyblue;
  border: 1px solid skyblue;
  border-radius: 25px;
`;

function App() {
  const [todo, setTodo] = useState(0);

  const handleClick = () => {
    setTodo(todo + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Todowrapper>
          <p>할일 {todo} 개 남았다!</p>
          <Btn onClick={handleClick}>Create Todo</Btn>
        </Todowrapper>
      </header>
    </div>
  );
}

export default App;
