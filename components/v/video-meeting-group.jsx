import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hoh3ywoxo.css';
import '../../css/z/zgwnfcb2n.css';
import '../../css/k/kp7oxbclo.css';
import '../../css/q/q3hz12bpz.css';
import '../../css/k/k5x7avb7k.css';
import '../../css/f/f5ha7w51v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hoh3ywoxo"/><path class="zgwnfcb2n"/><path class="kp7oxbclo"/><path class="q3hz12bpz"/><path class="k5x7avb7k"/><path class="f5ha7w51v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:video-meeting-group"} {...others} />);
}

export default Component;
