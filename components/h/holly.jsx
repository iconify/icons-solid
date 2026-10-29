import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5_fqnb0s.css';
import '../../css/s/stui2mbih.css';
import '../../css/z/z4y60jbap.css';
import '../../css/k/k4z5qfbck.css';
import '../../css/y/ykd23csng.css';
import '../../css/n/ni8ur5lsy.css';
import '../../css/a/a0kl-mbcv.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAdyg6cIq" x1="1.75" x2="13.02" y1="1.66" y2="20.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="p5_fqnb0s"/><stop offset=".42" class="stui2mbih"/><stop offset=".58" class="z4y60jbap"/><stop offset="1" class="k4z5qfbck"/></linearGradient></defs><path class="ykd23csng"/><path class="ni8ur5lsy wm-a"/><path fill="url(#SVGAdyg6cIq)" class="a0kl-mbcv wm-shine"/><path class="mp3vtlqfi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:holly"} {...others} />);
}

export default Component;
