import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/d/d01cwifyo.css';
import '../../css/v/vkdlgtbev.css';
import '../../css/o/oj60txbaf.css';
import '../../css/s/s3x67nblh.css';
import '../../css/d/dq6l__blt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGtF7EacYA" cx="7.42" cy="8.3" r="24.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="d01cwifyo wm-shadow"/><path fill="url(#SVGtF7EacYA)" class="vkdlgtbev wm-k"/><path class="oj60txbaf wm-shine"/><path class="s3x67nblh wm-deco"/><path class="dq6l__blt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:binoculars"} {...others} />);
}

export default Component;
