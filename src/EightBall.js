import React from "react";
import { useState } from "react";

const EightBall = (props) => {
  const randomNum = () => Math.floor(Math.random() * 20) + 1;

  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const getMsg = () => {
    const num = randomNum();
    setMsg(props.answers[num].msg);
    setColor(props.answers[num].color);
  };

  return (
    <div className="EightBall" style={{ backgroundColor: `${color}` }}>
      <div className="EightBall-msg" onClick={getMsg}>
        {msg}
      </div>
    </div>
  );
};

export default EightBall;
