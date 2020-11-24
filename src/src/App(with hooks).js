import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
          {name : "Joey", age:29},
          {name : "Ross", age: 32},
          {name : "Chandler", age:30}
        ],
        //otherState : 'Something else'
  });

  const [otherState, setOtherState] = useState('Some Other value');

  const switchNameHandler = () => {
  console.log('Was Clicked !');
  //DON"T SO THIS : this.state.persons[0].name = 'Gunther';
  setPersonsState({
    persons: [
      {name : "Gunther", age:29},
      {name : "Ross", age: 32},
      {name : "Bob", age:40}
    ]
  })
}
  
    return (
      <div className="App">
        <h1>Hey Buddy!</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>How you doin?</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        <Person name="Suyash" age="21"/>
      </div>
    );
 // return React.createElement('div',null,React.createElement('h1', null, 'Hey Bud'));    We don't use this syntax, however at the end the above code gets compiled into this one
   
  
} 

export default App;


//You can add anything
// state = {
//   persons: [
//     {name : "Joey", age:29},
//     {name : "Ross", age: 32},
//     {name : "Chandler", age:30}
//   ],
//   otherState : 'Something else'
// }

// switchNameHandler = () => {
//   console.log('Was Clicked !');
//   //DON"T SO THIS : this.state.persons[0].name = 'Gunther';
//   this.setState({
//     persons: [
//       {name : "Gunther", age:29},
//       {name : "Ross", age: 32},
//       {name : "Bob", age:40}
//     ]
//   })
// }
