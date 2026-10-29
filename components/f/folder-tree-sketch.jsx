import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l6j_xaccc.css';
import '../../css/m/mn1bpcbjl.css';
import '../../css/z/z3y7eccgc.css';
import '../../css/k/kcrlnd2mp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l6j_xaccc"/><path class="mn1bpcbjl wm-a"/><path class="wm-k z3y7eccgc"/><path class="kcrlnd2mp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-tree-sketch"} {...others} />);
}

export default Component;
