import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/f/fnm37ob4m.css';
import '../../css/d/dm-f9lb_a.css';
import '../../css/l/lxxj8cbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGVFGZBckT" cx="9.25" cy="6.86" r="19.55" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="fnm37ob4m wm-shadow"/><path fill="url(#SVGVFGZBckT)" class="dm-f9lb_a wm-k"/><path class="lxxj8cbwf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:jalebi"} {...others} />);
}

export default Component;
