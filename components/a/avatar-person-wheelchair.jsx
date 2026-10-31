import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/h/hox-qbbyw.css';
import '../../css/t/t_v48ccng.css';
import '../../css/h/ho400en4n.css';
import '../../css/u/ugftacctg.css';
import '../../css/u/uu1spq2ft.css';
import '../../css/n/nravw6e2w.css';
import '../../css/x/xsor9ccxv.css';
import '../../css/h/h7qxqp8fq.css';
import '../../css/t/tht2t9xxp.css';
import '../../css/a/aim4fab4t.css';
import '../../css/g/g1-t0tbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="hox-qbbyw wm-shadow"/><path class="t_v48ccng wm-shadow"/><path class="ho400en4n wm-shadow"/><path class="ugftacctg wm-k"/><path class="uu1spq2ft wm-k"/><path class="nravw6e2w wm-k"/><path class="wm-k xsor9ccxv"/><path class="h7qxqp8fq wm-k"/><path class="tht2t9xxp wm-k"/><path class="aim4fab4t wm-k"/><path class="g1-t0tbkk wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-person-wheelchair"} {...others} />);
}

export default Component;
