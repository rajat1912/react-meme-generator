import React from "react";
import "./App.css"
export default function Header() {
    return (
        <header className="header">
            <img src={`${process.env.PUBLIC_URL}/images/troll-face.png`} 
                className="header--image"
                alt="troll"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React course</h4>
        </header>
    )
}
