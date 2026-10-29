import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4i216vqg.css';
import '../../css/q/qbudnmeof.css';
import '../../css/w/w8s7q_bdd.css';
import '../../css/l/lgcq3zzjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4i216vqg wm-k"/><path class="qbudnmeof wm-k"/><path class="w8s7q_bdd wm-k"/><path class="lgcq3zzjm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:undo"} {...others} />);
}

export default Component;
