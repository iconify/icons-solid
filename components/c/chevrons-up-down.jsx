import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_q7agbpe.css';
import '../../css/h/heyvd5ige.css';
import '../../css/s/sc4j8lbcd.css';
import '../../css/k/k_6av1byg.css';
import '../../css/l/l3d7701vn.css';
import '../../css/q/qqwyy9bjs.css';
import '../../css/l/l4oytvhpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h_q7agbpe wm-k"/><path class="heyvd5ige wm-k"/><path class="sc4j8lbcd wm-k"/><path class="k_6av1byg wm-shine"/><path class="l3d7701vn wm-k"/><path class="qqwyy9bjs wm-k"/><path class="l4oytvhpc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevrons-up-down"} {...others} />);
}

export default Component;
