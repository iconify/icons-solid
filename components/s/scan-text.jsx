import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/jhuuwf3yy.css';
import '../../css/x/xtnlexbha.css';
import '../../css/i/im-x76bsv.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/y/y5szj3bco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="jhuuwf3yy wm-shadow"/><path fill="url(#SVGU00zieBw)" class="wm-k xtnlexbha"/><path class="im-x76bsv wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="wm-deco y5szj3bco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:scan-text"} {...others} />);
}

export default Component;
