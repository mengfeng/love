/*
 * @Author: alan_mf
 * @Date: 2022-08-21 16:59:31
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-08-22 13:33:36
 * @FilePath: /zaoan/config/config.default.js
 * @Description: 
 * 
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
    * built-in config
    * @type {Egg.EggAppConfig}
    **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660810955000_2288';

  // add your middleware config here
  config.middleware = [ 'onError' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  };

  // 正式项目要开启
  config.security = {
    csrf: {
		    enable: false,
    },
  };

  // 公众号配置
  config.wx = {
    appId: 'wx59b56a7cb42db295',
    appSecret: '2c23ae25d152a52f301fdb78a2443f09',
    token: 'junetext',
    template_id: 'TmigPhdDZqrIBz_eBXmkctEyUZq0br_8Xu9VJ5jjSgs', // 推送的模板id
    user: 'o7Ead53M1dY34-nnspHyi2L9CCB4', // 测试号里的用户微信号
  };

  config.userData = {
    mineBirth: '1998-09-24', // 自己的生日
    gfBirth: '2000-03-11', // 女朋友的生日
    loveDay: '2019-01-01', // 在一起的日期
    city: '郑州', // 获取天气使用
  };

  // 第三方
  config.apiConfig = {
    // 我申请的天行的appKey 最好自己申请, 次数超了大家都用不了()
    tianxing: {
      appKey: 'bcaddf1605dd53c3115c5a709082ac6f',
    },
    // 青云客傻瓜ai聊天
    aiChat: {
      key: 'free',
      appid: '0',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
