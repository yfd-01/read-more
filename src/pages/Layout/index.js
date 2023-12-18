import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.scss";

const Layout = () => {
  const [ inputIconSpin, setInputIconSpin ] = useState(false);

  return (
    <div className="container">
      <div className="top">top</div>
      <div className="content">
        <div className="inputWrapper">
          <Input className="inputItem" placeholder="搜索"
            suffix={
              <SearchOutlined style={{fontSize: "20px"}} spin={inputIconSpin}
              onMouseEnter={() => { setInputIconSpin(true) }}
              onMouseLeave={() => { setInputIconSpin(false) }} />
            } />
          </div>
      </div>
      <div className="btm">btm</div>
    </div>
  )
}

export default Layout;
