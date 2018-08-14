import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
      all: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleClear(event) {
    this.setState({value: '', items: [], all: ''});
    event.preventDefault();
  }

  handleSubmit(event) {
    //alert('An essay was submitted: ' + this.state.value);
    let items = this.state.items;
    items.push(this.state.value);
    //items.reverse();
    this.setState({items: items});
    let output = '';

    if(items.length > 0) {
    output = items.map((k, indexElement)=>{
        return (
          <p className="pp">
          {k}
          </p>
        )
      });
    }
    this.setState({all: output});
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <div className="chat">
        {this.state.all}
      </div>
      <h2>input: {this.state.value}</h2>
      <form onSubmit={this.handleSubmit}>

        <label>
          Enter Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={this.handleClear.bind(this)}>Clear</button>
      </div>
    );
  }
}


export default App;
