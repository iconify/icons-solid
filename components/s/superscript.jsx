import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gk37j3bew.css';
import '../../css/m/m-jmyvdqj.css';
import '../../css/f/f43yvabml.css';
import '../../css/d/dlv8ldbbu.css';
import '../../css/h/hrbnujbnn.css';
import '../../css/l/l8arkwb7r.css';
import '../../css/c/cxaqj4bxk.css';
import '../../css/m/mibuxdbep.css';
import '../../css/t/t8qz--bgz.css';
import '../../css/p/p7h7s2bag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gk37j3bew wm-shadow"/><path class="m-jmyvdqj wm-shadow"/><path class="f43yvabml"/><path class="dlv8ldbbu"/><path class="hrbnujbnn"/><path class="l8arkwb7r"/><path class="cxaqj4bxk"/><path class="mibuxdbep wm-shine"/><path class="t8qz--bgz wm-shine"/><path class="p7h7s2bag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:superscript"} {...others} />);
}

export default Component;
