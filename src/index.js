import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';


//Components
import Header from './components/Header';
import NewsList from './components/News_list'


class App extends Component {

  state = {
    news: JSON
  }

  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))