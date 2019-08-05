import React from 'react';
import './App.css';
import NavigationBar from './Navigation';
import Footer from './Footer1';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './HomeSection';
import ContactMe from './ContactMe';

const App = () => (
    <Router basename='/'>
    <NavigationBar />
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={ContactMe} />
   </div>
   <Footer/>

    </Router>
  );

export default App;