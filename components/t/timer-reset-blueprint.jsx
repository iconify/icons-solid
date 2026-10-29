import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/o8keowbch.css';
import '../../css/r/rigag0b8r.css';
import '../../css/u/u_nrdo5_k.css';
import '../../css/y/yny7ar2lc.css';
import '../../css/h/hr7v-vbfi.css';
import '../../css/t/tf2synbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="o8keowbch wm-deco"/><path class="rigag0b8r wm-deco"/><path class="u_nrdo5_k wm-deco"/><path class="wm-k yny7ar2lc"/><path class="hr7v-vbfi wm-a"/><path class="tf2synbwh wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-reset-blueprint"} {...others} />);
}

export default Component;
