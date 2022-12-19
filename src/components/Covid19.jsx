import React, { useEffect, useState } from "react";
import "./covid19.css";

const Covid19 = () => {
  const [data, setdata] = useState([]);
  const API_data = async () => {
    try {
      const res_api = await fetch("https://data.covid19india.org/data.json");
      const real_data = await res_api.json();
      setdata(real_data.statewise[0]);
      console.log(real_data.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    API_data();
  }, []);
  return (
    <>
      <div class="header">
        <h4>Covid 19 Tracker</h4>
        <p>INDIA</p>
      </div>
      <h1> LiVE</h1>
      <h2>Covid-19 Coronavirus Tracker Website</h2>
      <div id="india">
        <h3>
          Total Cases In <br />
          <span>INDIA</span>
        </h3>
      </div>
      <div class="corona">
        <ul>
          <li class="active">
            Total Active Cases <br /> <span>{data.active}</span>
          </li>
          <li class="confirm">
            Total confirmed Cases <br /> <span>{data.confirmed}</span>
          </li>
          <li class="death">
            Total deaths <br /> <span>{data.deaths}</span>
          </li>
          <li class="recover">
            Total Recovered <br /> <span>{data.recovered}</span>
          </li>
          <li class="migrated">
            Total Migration <br />
            <span>{data.migratedother}</span>
          </li>
          <li class="update">
            Last Update <br />
            <span>{data.lastupdatedtime}</span>
          </li>
        </ul>
      </div>
      <div className="footer">
        <h3>
          For More Info Visit
          <span>
            <a href="https://www.worldometers.info/coronavirus/country/india/">
              Covid-19 Info
            </a>
          </span>
        </h3>
      </div>
    </>
  );
};
export default Covid19;
