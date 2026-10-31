import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/w/w-tquri8y.css';
import '../../css/l/l59qo4yhn.css';
import '../../css/k/kfw8xxmbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG7VWcIolF" cx="7.42" cy="6.33" r="26.35" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="w-tquri8y wm-shadow"/><path fill="url(#SVG7VWcIolF)" class="l59qo4yhn wm-k"/><path class="kfw8xxmbc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:avatar-monster-fluffy"} {...others} />);
}

export default Component;
