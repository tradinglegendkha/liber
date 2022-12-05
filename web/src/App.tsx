import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Users from "./components/users";
import Landing from "./components/Landing";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
