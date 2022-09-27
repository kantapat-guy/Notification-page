import { useState } from "react";
import "./App.css";
import mark from "./assets/images/avatar-mark-webber.webp";
import angela from "./assets/images/avatar-angela-gray.webp";
import jacob from "./assets/images/avatar-jacob-thompson.webp";
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import kim from "./assets/images/avatar-kimberly-smith.webp";
import nathan from "./assets/images/avatar-nathan-peterson.webp";
import anna from "./assets/images/avatar-anna-kim.webp";
import pic from "./assets/images/image-chess.webp";
import { useEffect } from "react";

function App() {
  const [read, setRead] = useState({
    mark: "unread",
    angela: "unread",
    jacob: "unread",
    rizky: "read",
    kimberly: "read",
    nathan: "read",
    anna: "read",
  });

  const readAll = () => {
    setRead({
      mark: "read",
      angela: "read",
      jacob: "read",
      rizky: "read",
      kimberly: "read",
      nathan: "read",
      anna: "read",
    });
  };

  const [count, setCount] = useState(0);

  const startCount = () => {
    const arr = Object.values(read);
    let num = 0;
    arr.forEach((ele) => {
      if (ele === "unread") {
        num++;
      }
      setCount(num);
    });
  };

  useEffect(() => {
    startCount();
  }, [read]);

  return (
    <div className="App">
      <header>
        <div className="noti-container">
          <h2>Notifications</h2>
          <div className="noti-num">{count}</div>
        </div>
        <button className="all-read" onClick={readAll}>
          Mark all as read
        </button>
      </header>
      <div className={read.mark === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={mark} alt="mark" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Mark Webber </span>reacted to your
                recent post <span>My first tour today!</span>
                <span className={read.mark === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">1m ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className={read.angela === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={angela} alt="angela" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Angela Gray </span>followed you
                <span className={read.angela === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">5m ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className={read.jacob === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={jacob} alt="jacob" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Jacob Thompson </span>has joined
                your group <span>Chess Club</span>
                <span className={read.jacob === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className={read.rizky === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={rizky} alt="rizky" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Rizky Hasanuddin </span>sent you a
                private message <span></span>
                <span className={read.rizky === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">5 day ago</p>
            </div>
          </div>
        </div>
        <p className="message">
          Hello, thanks for setting up the Chess Club. I;ve been a member for a
          few weeks now and I'm already having lots of fun and improving my
          game.
        </p>
      </div>

      <div className={read.kimberly === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={kim} alt="kim" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Kimberly Smith </span>commented on
                your picture
                <span className={read.kimberly === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">1 weeks ago</p>
            </div>
          </div>
          <img src={pic} alt="activity" className="act-pic" />
        </div>
      </div>

      <div className={read.nathan === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={nathan} alt="nathan" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Nathan Peterson </span>reacted to
                your recent post{" "}
                <span>5 end game strategies to increase your win rate</span>
                <span className={read.nathan === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className={read.anna === "read" ? "read" : "notread"}>
        <div style={{ display: "flex" }}>
          <img src={anna} alt="anna" />
          <div className="sub-content-container">
            <div className="indetail-container">
              <p className="detail-text">
                <span className="name-text">Anna Kim </span>left the group{" "}
                <span>Chess Club</span>
                <span className={read.anna === "read" ? "nodot" : "dot"}>
                  {" "}
                  &#9679;
                </span>
              </p>
              <p className="time-text">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
