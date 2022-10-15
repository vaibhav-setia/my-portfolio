import React from "react";
import data from "../data/data.json";

const Header = (props) => {
  const headerStyles = {};
  return (
    <div
      className="header"
      style={{
        backgroundColor: data.header.backgroundColor,
        color: data.header.fontPrimaryColor,
      }}
    >
      <div className="header-left">
        <a href="#">
          <div>{data.firstName}</div>
          <div>{data.lastName}</div>
        </a>
      </div>

      <div className="header-right">
        <span>
          <a href="#about">ABOUT ME</a>
        </span>
        <span>
          <a href="#skills">SKILLS</a>
        </span>
        <span>
          <a href="#projects">PROJECTS</a>
        </span>
        <span>
          <a href="#experience">EXPERIENCE</a>
        </span>
        <span>
          <a
            href="https://drive.google.com/file/d/1ciyU9JBF73QnQxv6r2-xhq7dXbVCHhYp/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
