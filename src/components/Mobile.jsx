import React from "react-dom";
import "./mobile.css";
const Mobile = () => {
  let data = ["Android", "BlackBerry", "iphone", "Windows Phone"];
  let mdata = ["Samsung", "HTC", "iphone", "Micromax"];
  return (
    <div className="main">
      <h3>Mobile Operating System</h3>
      <ul>
        {data.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
      <h3>Mobile Manufacturers</h3>
      <ul>
        {mdata.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
};
export default Mobile;
