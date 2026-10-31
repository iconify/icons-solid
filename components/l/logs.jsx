import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/r5dgukbgu.css';
import '../../css/w/w9bureb7r.css';
import '../../css/m/mdfo7wbcn.css';
import '../../css/g/gyytzlc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6HxgaeIr" cx="7.2" cy="7.02" r="25.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="r5dgukbgu wm-shadow"/><path fill="url(#SVG6HxgaeIr)" class="w9bureb7r wm-k"/><path class="mdfo7wbcn wm-shine"/><path class="gyytzlc5m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:logs"} {...others} />);
}

export default Component;
