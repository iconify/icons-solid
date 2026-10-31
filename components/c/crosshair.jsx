import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tzx3761lr.css';
import '../../css/v/vxhwm8bwc.css';
import '../../css/k/kozqc6k2d.css';
import '../../css/r/rrdkk8bwp.css';
import '../../css/s/sbp-a3ekm.css';
import '../../css/i/iqusv92tr.css';
import '../../css/w/waj1wz6dk.css';
import '../../css/i/isu7xwbts.css';
import '../../css/a/a3bhoacyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tzx3761lr wm-shadow"/><path class="vxhwm8bwc wm-k"/><path class="kozqc6k2d wm-k"/><path class="rrdkk8bwp wm-k"/><path class="sbp-a3ekm wm-k"/><path class="iqusv92tr wm-shine"/><path class="waj1wz6dk wm-a"/><path class="isu7xwbts wm-a"/><path class="a3bhoacyy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:crosshair"} {...others} />);
}

export default Component;
