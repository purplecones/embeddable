import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 300px;
  width: 400px;
  padding: 1em;
  margin: 1em;
  background: lightgray;
  border: 1px solid black;
  font-family: arial;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

const OpenButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3em;
  width: 5em;
  margin: 1em;
  border: 1px solid;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1em;
  padding: .5em;
`;

class App extends Component {
  state = {
    isVisible: false,
  };
  toggleApp = () => this.setState({ isVisible: !this.state.isVisible });
  render() {
    return this.state.isVisible
      ? <AppWrapper className="App" isVisible={this.state.isVisible}>
          <CloseButton onClick={this.toggleApp}>X</CloseButton>
          My App
        </AppWrapper>
      : <OpenButton onClick={this.toggleApp}>Open</OpenButton>;
  }
}

export default App;
