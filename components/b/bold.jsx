import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/r5-2fm9wi.css';
import '../../css/h/hulhysbxl.css';
import '../../css/c/c13n2ib8l.css';
import '../../css/k/k-o6klb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG40IpKZKY" cx="9.18" cy="7.02" r="19.73" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="r5-2fm9wi wm-shadow"/><path fill="url(#SVG40IpKZKY)" class="hulhysbxl wm-k"/><path class="c13n2ib8l wm-k"/><path class="k-o6klb3j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:bold"} {...others} />);
}

export default Component;
