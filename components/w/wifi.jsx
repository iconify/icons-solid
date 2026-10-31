import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/g/gsttpeasg.css';
import '../../css/c/c6u-ndroi.css';
import '../../css/d/dzzowgcif.css';
import '../../css/v/vs--wqdlj.css';
import '../../css/w/wpy5c9g4l.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGCbnWNb7H" cx="7.29" cy="8.21" r="23.78" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="gsttpeasg wm-shadow"/><path fill="url(#SVGCbnWNb7H)" class="c6u-ndroi wm-k"/><path class="dzzowgcif wm-k"/><path class="vs--wqdlj wm-shine"/><path class="wm-deco wpy5c9g4l"/><path class="p1c1nmbjz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:wifi"} {...others} />);
}

export default Component;
