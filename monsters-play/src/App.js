import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [
        {
          name: 'Frankie',
          id: 234
        },
        {
          name: 'Dracu',
          id: 34
        },
        {
          name: 'Zom',
          id:465
        }]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className='App'>
      <CardList name="foo">
        <h1>Frankie</h1>
      </CardList>
        { 
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>) 
        }
      </div>
    );
  }
}



export default App;
