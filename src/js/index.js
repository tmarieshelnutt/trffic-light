//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";

export function Home() {
    const [selectedColor, setselectedColor] = useState("red");


    return (
        

        <div className="traffic-light">
            <div className></div>
            <div onClick={() => setselectedColor ("red")}
            className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
            <div onClick={() => setselectedColor ("yellow")}
            className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
            <div onClick={() => setselectedColor ("green")}
            className={"light green" + ((selectedColor === "green") ? " glow" : "")}></div>
            {/* <div className="light glow" onClick=></div> */}
        </div>
    );
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
