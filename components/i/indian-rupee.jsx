import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z79k3gati.css';
import '../../css/w/weqatsoij.css';
import '../../css/k/kx_kx8b8h.css';
import '../../css/k/kwzsovtnx.css';
import '../../css/m/mcts_8y4c.css';
import '../../css/h/h_q0c4g7k.css';
import '../../css/o/o64_l80vf.css';
import '../../css/e/elpcct2oi.css';
import '../../css/f/ffr5vxbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow z79k3gati"/><path class="weqatsoij wm-shadow"/><path class="kx_kx8b8h"/><path class="kwzsovtnx"/><path class="mcts_8y4c"/><path class="h_q0c4g7k"/><path class="o64_l80vf wm-shine"/><path class="elpcct2oi wm-shine"/><path class="ffr5vxbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:indian-rupee"} {...others} />);
}

export default Component;
