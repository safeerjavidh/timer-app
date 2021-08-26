import {useState} from 'react';
import { useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(60);
    const [toggleTimer, setToggleTimer] = useState(true);
    const [showReset, setShowReset] = useState(true);
    const startTimer = () => {
        setToggleTimer(timer => !timer)
        window.test = setInterval(function(){
            setTime(time => time-1);
            
            if(time === 0){
                stopTimer()
            }
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(window.test);
        setShowReset(reset => !showReset)
    }

    const resetTimer = () => {
        setTime(time => 60)
        setToggleTimer(timer=> true)
        setShowReset(reset => true)
    }


    useEffect(() => {
        if(time === 0) {
          stopTimer();
        }
      }, [time]);

    return (
        <div>
            <div className="mg-t-20">:{time}</div>
            {toggleTimer ? <button className="mg-t-10 green" onClick={startTimer}>Start</button> : (showReset ?  <button className="mg-t-10 red" onClick={stopTimer}>Stop</button> : <button className="mg-t-10" onClick={resetTimer}>Reset</button>)}
        </div>
    )
}

export default Timer
