import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djkwfrb_g.css';
import '../../css/k/k-xta9b1o.css';
import '../../css/x/xi4t3abxc.css';
import '../../css/q/qjrv8extb.css';
import '../../css/f/f28pq_blq.css';
import '../../css/f/fw2_8wb0r.css';
import '../../css/e/ek4c71jjm.css';
import '../../css/p/pldqp0bcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="djkwfrb_g wm-k"/><path class="k-xta9b1o wm-k"/><path class="wm-k xi4t3abxc"/><path class="qjrv8extb wm-shine"/><path class="f28pq_blq wm-k"/><path class="fw2_8wb0r wm-k"/><path class="ek4c71jjm wm-k"/><path class="pldqp0bcj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:user"} {...others} />);
}

export default Component;
