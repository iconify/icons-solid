import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5_fqnb0s.css';
import '../../css/s/stui2mbih.css';
import '../../css/z/z4y60jbap.css';
import '../../css/k/k4z5qfbck.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/f/flqd_-erz.css';
import '../../css/y/yjdw1bbpq.css';
import '../../css/b/byr4kr8ec.css';
import '../../css/r/rjjlj5jvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZmsYWbxW" x1=".5" x2="12.58" y1=".51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="p5_fqnb0s"/><stop offset=".42" class="stui2mbih"/><stop offset=".58" class="z4y60jbap"/><stop offset="1" class="k4z5qfbck"/></linearGradient><linearGradient id="SVGIAUSRbme" x1=".5" x2="12.58" y1=".51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient></defs><path class="flqd_-erz"/><path class="wm-a yjdw1bbpq"/><path fill="url(#SVGZmsYWbxW)" class="byr4kr8ec wm-shine"/><path fill="url(#SVGIAUSRbme)" class="rjjlj5jvw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:cloud-sun"} {...others} />);
}

export default Component;
