import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const m_value1 = Math.floor(Math.random() * 100);
const m_value2 = Math.floor(Math.random() * 100);
const m_value3 = Math.floor(Math.random() * 100);
const m_proposedAnswer = Math.floor(Math.random() * 3) + m_value1 + m_value2 + m_value3;
//const numQuestions = 0;
//const numCorrect = 0;
//const corrAnswer = value1 + value2 + value3;
class App extends Component {
  state = {
    
    numQuestions: 0,
    numCorrect:0,
    value1: m_value1,
    value2: m_value2,
    value3: m_value3,
    proposedAnswer : m_proposedAnswer,
    correctAnswer: m_value1 + m_value2 + m_value3
  };
updateQuestion(){
	const m_temp1 = Math.floor(Math.random() *100);
	const m_temp2 = Math.floor(Math.random() *100);
	const m_temp3 = Math.floor(Math.random() *100);
	const m_tempProposedAnswer = Math.floor(Math.random() * 3) + (m_temp1 + m_temp2 + m_temp3);
	const m_tempCorrectAnswer = m_temp1 + m_temp2 + m_temp3;
  this.setState({
    value1: m_temp1,
    value2: m_temp2,
    value3: m_temp3,
  	proposedAnswer: m_tempProposedAnswer,
    correctAnswer : m_tempCorrectAnswer,
    numQuestions: this.state.numQuestions +1
});
  
};
  handleAnswer = event =>{
    this.updateQuestion();
    if ((this.state.correctAnswer === this.state.proposedAnswer && event.target.name === 'true' )||
       (this.state.correctAnswer !== this.state.proposedAnswer && event.target.name === 'false')
       )
      this.setState({
        numCorrect:this.state.numCorrect +1
      });
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleAnswer} name="true">
			True
		  </button>
		  <button onClick={this.handleAnswer} name="false">
			False
		  </button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
