import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/h/hyu_f9evf.css';
import '../../css/v/vy7l0xbaq.css';
import '../../css/o/o5utgxbfm.css';
import '../../css/p/ppyc19b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGTylsdcpX" cx="7.51" cy="6.29" r="25.96" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="hyu_f9evf wm-shadow"/><path fill="url(#SVGTylsdcpX)" class="vy7l0xbaq wm-k"/><path class="o5utgxbfm wm-k"/><path class="ppyc19b3c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:unlink"} {...others} />);
}

export default Component;
