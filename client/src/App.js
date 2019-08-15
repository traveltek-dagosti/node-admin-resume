import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Layouts
import { DashboardLayout, HomeLayout } from "layouts";
//import pages;
import { Login, Register, NotFound } from "views/pages";

// Import Main styles for the home
import "scss/dashboard/styles.scss";
// Import Main styles for the home
import "scss/home/styles.scss";

const hist = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<Router history={hist}>
				<Switch>
					<Route exact path="/login" name="Login Page" component={Login} />
					<Route
						exact
						path="/register"
						name="Register Page"
						component={Register}
					/>
					<Route
						exact
						path="/notfound"
						name="Page Not Found"
						component={NotFound}
					/>
					<Route exact path="/" name="Home" component={HomeLayout} />
					{/* This go in protectedRoute later */}
					<Route path="/" name="Dashboard" component={DashboardLayout} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
