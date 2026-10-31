import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/t/t9hgig8dq.css';
import '../../css/y/y4c9guvrp.css';
import '../../css/h/hit13ibly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGRByOnbvd" cx="7.73" cy="6.18" r="25.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="t9hgig8dq wm-shadow"/><path fill="url(#SVGRByOnbvd)" class="wm-k y4c9guvrp"/><path class="hit13ibly wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:footprints"} {...others} />);
}

export default Component;
