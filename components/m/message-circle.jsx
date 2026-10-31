import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/w/w1dlto9fz.css';
import '../../css/y/yyz65k6wk.css';
import '../../css/j/jwyl6ubhs.css';
import '../../css/y/y0mr887bi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGUUQVLbmu" cx="8.3" cy="6.6" r="23.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="w1dlto9fz wm-shadow"/><path fill="url(#SVGUUQVLbmu)" class="wm-k yyz65k6wk"/><path class="jwyl6ubhs wm-shine"/><path class="wm-deco y0mr887bi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:message-circle"} {...others} />);
}

export default Component;
