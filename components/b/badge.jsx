import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff32mrbfr.css';
import '../../css/a/anvwsjdik.css';
import '../../css/e/ewjj8u_lc.css';
import '../../css/a/aqoq5mbro.css';
import '../../css/a/addmhcrht.css';
import '../../css/c/cnw0pkbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ff32mrbfr"/><path class="anvwsjdik"/><path class="ewjj8u_lc"/><path class="aqoq5mbro"/><path class="addmhcrht"/><path class="cnw0pkbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:badge"} {...others} />);
}

export default Component;
