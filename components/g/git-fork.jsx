import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/s/s82rlw_uv.css';
import '../../css/v/vtk2_nhlx.css';
import '../../css/q/qcb1krnrd.css';
import '../../css/i/i-od1nmxt.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGcl6DncqX" cx="7.64" cy="6.33" r="25.72" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="s82rlw_uv wm-shadow"/><path fill="url(#SVGcl6DncqX)" class="vtk2_nhlx wm-k"/><path class="qcb1krnrd wm-shine"/><path class="i-od1nmxt wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:git-fork"} {...others} />);
}

export default Component;
