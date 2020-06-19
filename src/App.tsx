import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortVisualizer from "./SortVisualizer/SortVisualizer";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return <SortVisualizer></SortVisualizer>;
  }
}

export default App;
