// 同查找 _U 一样, 查找 KievRPSSecAuth、_RwBf 的值并替换下方的xxx
const KievRPSSecAuth = 'FAB6BBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACA0XwDuszC3LOATChu/Ah6WYeN4Cx3IYGBZ+aZ8u+zSFGW8j84FWZw1wV07pdfc7VD9fkAsq48KceXEvVWFGn3gqagxDlqdR8icN1cBcnJHxlstgIPuT47gK1dc3f4pzwD9I1YTvJsQbqv+CkH5MUMRy/P13OLztpd3Q258cNSkVEJjjjEvVdDRGoZYBDIkFB47vNlmoaJtYPB0YM6vmvViQ/Kogb06wLziHLwcDoxyzTnyp0uEY7FCvTUd5SBADAdItf/IG60oK4FUtSAMObWLYBnOXOeyrZHgzRX8h+jNj9iqZ5b+g6MZRhf8vc3HX9XiHIbGgoluvxFb/7EASmhsgU8E4OuNpssWA5YCFAhueNQEFHCzGBViXdDseaCu2M6LLKd/aRT0j3qD6w1Ydv7rCNvBNNL9QwM1vlCQKuRY9RPJYoYh31PYwo4cDLHmqXP9LgzNCFmZH8gD/qBG7LTd+zQvNRSJ0CMofxYhwv7iuj/cfY+N7Am3ZQXDWBIv5okIwThru1doJJjhTt2Lk3OIR5zKXA2ofyvwrAJTXg8mBycyi3dRUIGwH2mYdJoNRQYKrLvJXQu+RlQRdhFTk4Lo7pL5I0vEvjLzaFs3zy5prQV/nG3ckpZtTPeLjHZ96cnGJyjoXgz36uDflJKVGKuS8ADJf2OA6AePTVzPdgLVkHZzkFPZize0lZ/1Lb6p+IeJuNtneRZm8Mxqw1RRFA0zSZ+rvHjJd50MTCcsMGayp5ySWqEDgRmiDiapdSrWRjzRcz6Y5tKXkdnpn10sLc+NeyM8jnvhvNgekqLAYkBznbEq7ZBwx3UCNnyLxVLDPBugc0letEynwa+tLKCOb7EJ9Fts55eZXHRSzuKD+CkGiXqna6/JAIKKDGfwMcC08cKRsBS787yW/gejTfN3iu4Jt4lRzMWN4LKzkOKISPJZ7H7UpwTmOa18azaHcHskNQsuPcqukFcSTlHpPpLabucKeJvuIMumiyFe06/jVBtNfrFvbt95hhgFybBwzCiQPcPSKM7GVA15tRgCMpMMW0mliI9nIsrfT96XjKVVJeKkCQ3ePCRsgNfg1mMeOWP3O6hdu3GkLW8KcaOxTLowpwbE7q5nFF7jfnVeDfeGqEyRn2FYSAYEYohxqG+6gdHaKozld8qXOKJQ1FDJCu28pPkD5HD7VTSTnGxMa7CIIskqUcQKFQWRMeOycAe9UNHEu9Va8QKFnh02aWawcpEuSY2m33Ny4sIJ3OO6H9r8R47t9pUGM7RBkasRlgTtl8STKfiBHwpv0Qg/MG56ALB9WHPubvbRKRlOVwEAAHZr6zuGqCz7rjSeets66HdMkTQ16BnCcGIQfBPrARDJ1pVyCZndbwQVEfkt9BmhMf36l804VYx1/cjKcXjhnc5VhWOOKc12KbJch/LmUr5BW/fwKB31ALxPgyih3CabxbjnRfkxp/lkUAArF7doSkzh24cFaK8TvbG18PO8N';
const _RwBf = 'r=1&mta=0&rc=477&rb=477&gb=0&rg=0&pc=0&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=1&l=2023-08-10T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=BINGTRIAL5TO250P201808&c=MY00IA&t=1116&s=2023-02-09T06:12:57.0416073+00:00&ts=2023-08-10T10:04:37.1433722+00:00&rwred=0&wls=0&wlb=0&lka=0&lkt=0&TH=&dci=0&e=iC8aJNinEz1xsYZKzr4dG4rPI8WemWldm9FTwfH2JIBxbTLEnZKJJt7z1j6xL4PZaETZSI_DSOvkeHBBUmMB-A&A=D61E7313CAEF17715D15B3D1FFFFFFFF';
const _U = '11KI5S7qVsJwIVg6dlxDZe-8fJ_IfqvqGfayQOITr_2JNFKQTQnRHwwE7DyTsGy3ulNV_-dE4Liw4fof5M0wBIfI-L5L_MhFkxFnB-2yPXLPRgwKkE8JsP0VVJBRhXpw5DXNvDQHkqEzHShX6f8k28kB3lMTmwGUpzm3q5eS-tsui-XOJsBRYJrVmyB-jM5Jw_SGohSqTQzZuxc7jJhrXln9d6vvdhjbmVXGyImelRUk';
const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
];
const IP_RANGE = [
  ['4.150.64.0', '4.150.127.255'],       // Azure Cloud EastUS2 16382
  ['4.152.0.0', '4.153.255.255'],        // Azure Cloud EastUS2 131070
  ['13.68.0.0', '13.68.127.255'],        // Azure Cloud EastUS2 32766
  ['13.104.216.0', '13.104.216.255'],    // Azure EastUS2 256
  ['20.1.128.0', '20.1.255.255'],        // Azure Cloud EastUS2 32766
  ['20.7.0.0', '20.7.255.255'],          // Azure Cloud EastUS2 65534
  ['20.22.0.0', '20.22.255.255'],        // Azure Cloud EastUS2 65534
  ['40.84.0.0', '40.84.127.255'],        // Azure Cloud EastUS2 32766
  ['40.123.0.0', '40.123.127.255'],      // Azure Cloud EastUS2 32766
  ['4.214.0.0', '4.215.255.255'],        // Azure Cloud JapanEast 131070
  ['4.241.0.0', '4.241.255.255'],        // Azure Cloud JapanEast 65534
  ['40.115.128.0', '40.115.255.255'],    // Azure Cloud JapanEast 32766
  ['52.140.192.0', '52.140.255.255'],    // Azure Cloud JapanEast 16382
  ['104.41.160.0', '104.41.191.255'],    // Azure Cloud JapanEast 8190
  ['138.91.0.0', '138.91.15.255'],       // Azure Cloud JapanEast 4094
  ['151.206.65.0', '151.206.79.255'],    // Azure Cloud JapanEast 256
  ['191.237.240.0', '191.237.241.255'],  // Azure Cloud JapanEast 512
  ['4.208.0.0', '4.209.255.255'],        // Azure Cloud NorthEurope 131070
  ['52.169.0.0', '52.169.255.255'],      // Azure Cloud NorthEurope 65534
  ['68.219.0.0', '68.219.127.255'],      // Azure Cloud NorthEurope 32766
  ['65.52.64.0', '65.52.79.255'],        // Azure Cloud NorthEurope 4094
  ['98.71.0.0', '98.71.127.255'],        // Azure Cloud NorthEurope 32766
  ['74.234.0.0', '74.234.127.255'],      // Azure Cloud NorthEurope 32766
  ['4.151.0.0', '4.151.255.255'],        // Azure Cloud SouthCentralUS 65534
  ['13.84.0.0', '13.85.255.255'],        // Azure Cloud SouthCentralUS 131070
  ['4.255.128.0', '4.255.255.255'],      // Azure Cloud WestCentralUS 32766
  ['13.78.128.0', '13.78.255.255'],      // Azure Cloud WestCentralUS 32766
  ['4.175.0.0', '4.175.255.255'],        // Azure Cloud WestEurope 65534
  ['13.80.0.0', '13.81.255.255'],        // Azure Cloud WestEurope 131070
  ['20.73.0.0', '20.73.255.255'],        // Azure Cloud WestEurope 65534
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://raw.githubusercontent.com/Harry-zklcdc/go-proxy-bingai/master/';
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl+'web/');
  } else {
    url = baseUrl + 'web/index.html';
  }
  const res = await fetch(url);
  const newRes = new Response(res.body, res);
  if (pathname.endsWith('.js')) {
    newRes.headers.set('content-type', 'application/javascript');
  } else if (pathname.endsWith('.css')) {
    newRes.headers.set('content-type', 'text/css');
  } else if (pathname.endsWith('.svg')) {
    newRes.headers.set('content-type', 'image/svg+xml');
  } else if (pathname.endsWith('.ico') || pathname.endsWith('.png')) {
    newRes.headers.set('content-type', 'image/png');
  } else {
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  newRes.headers.delete('content-security-policy');
  return newRes;
};


export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch (request, env, ctx) {
    const currentUrl = new URL(request.url);
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname === '/sysconf') {
      return new Response('{"code":200,"message":"success","data":{"isSysCK":false,"isAuth":true}}')
    }
    let targetUrl;
    if (currentUrl.pathname.includes('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else {
      targetUrl = new URL(BING_ORIGIN + currentUrl.pathname + currentUrl.search);
    }

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', targetUrl.origin);
    newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI');
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;
    if (!cookie.includes('KievRPSSecAuth=')) {
       cookies += '; KievRPSSecAuth=' + KievRPSSecAuth 
    }
    if (!cookie.includes('_RwBf=')) {
      cookies += '; _RwBf=' + _RwBf
    }
    newHeaders.set('Cookie', cookies);
    const oldUA = request.headers.get('user-agent');
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
    });
    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    const newRes = new Response(res.body, res);
    newRes.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
    newRes.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    newRes.headers.set('Access-Control-Allow-Credentials', 'true');
    newRes.headers.set('Access-Control-Allow-Headers', '*');
    return newRes;
  },
};
