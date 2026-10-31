import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/w/wyeq3vbos.css';
import '../../css/f/ffxgrpl2u.css';
import '../../css/k/kg_6751mx.css';
import '../../css/g/gyytzlc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1DtEedzw" cx="8.3" cy="6.18" r="24.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow wyeq3vbos"/><path fill="url(#SVG1DtEedzw)" class="ffxgrpl2u wm-k"/><path class="kg_6751mx wm-shine"/><path class="gyytzlc5m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:sd-card"} {...others} />);
}

export default Component;
