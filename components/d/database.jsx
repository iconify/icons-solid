import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/rkasysbrw.css';
import '../../css/f/f5n1pyfbk.css';
import '../../css/f/fb9c_nwuo.css';
import '../../css/g/gyytzlc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxpzDbenL" cx="8.08" cy="6.18" r="24.64" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="rkasysbrw wm-shadow"/><path fill="url(#SVGxpzDbenL)" class="f5n1pyfbk wm-k"/><path class="fb9c_nwuo wm-shine"/><path class="gyytzlc5m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:database"} {...others} />);
}

export default Component;
