import React from 'react'
import { Divider } from 'antd'

export default function () {
  return (
    <div className="footer">
      <div className="footer-block content-origin">
        <span>免责声明：内容来源于 <a href="https://movie.douban.com/" target="_blank">豆瓣电影</a> ，接口来源于网络，侵删，禁止商业用途使用</span>
      </div>
      <div className="footer-block copyright">
        <span>Copyright &copy;2019 <a href="https://github.com/lovelifeloveyou" target="_blank">superqjq</a> &lt;1921689024@qq.com&gt;</span>
        <Divider type="vertical" />
      </div>
      <div className="footer-block menu">
        <span><a href="https://github.com/lovelifeloveyou" target="_blank">关于我</a></span>
        <Divider type="vertical" />
        <span><a href="https://github.com/lovelifeloveyou" target="_blank">About me</a></span>
        <Divider type="vertical" />
        <span><a href="https://github.com/lovelifeloveyou" target="_blank">Github</a></span>
      </div>
    </div>
  )
}