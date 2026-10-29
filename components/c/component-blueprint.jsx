import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cvjb04bdk.css';
import '../../css/r/racqqqalx.css';
import '../../css/z/zchyb6dam.css';
import '../../css/s/si82qb4av.css';
import '../../css/z/zm_z7ccau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cvjb04bdk wm-deco"/><path class="racqqqalx wm-deco"/><path class="wm-deco zchyb6dam"/><path class="si82qb4av wm-k"/><path class="wm-a zm_z7ccau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:component-blueprint"} {...others} />);
}

export default Component;
