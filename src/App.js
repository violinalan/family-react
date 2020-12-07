import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scottList: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch("http://localhost:8080/scotts");
    const json = await response.json();

    this.setState({scottList: json});
  }

  render() {
    const list = this.state.scottList.map(person => {
      return (
        <tr>
          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td>{person.email}</td>
        </tr>
      );
    })

    return (
      <div>
        <h1>Scott Family</h1>
        <table>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
          {list}
        </table>
      </div>
    );
  }
}

export default App;