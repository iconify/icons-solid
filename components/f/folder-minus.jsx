import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anvd95b7n.css';
import '../../css/k/kno0-o0wp.css';
import '../../css/o/onr66rb0t.css';
import '../../css/d/d9bl_ubpz.css';
import '../../css/g/gi3grbc8q.css';
import '../../css/o/ojvz3cbiy.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d6ed8ebnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="anvd95b7n wm-k"/><path class="kno0-o0wp wm-deco"/><path class="onr66rb0t wm-k"/><path class="d9bl_ubpz wm-k"/><path class="gi3grbc8q wm-shadow"/><path class="ojvz3cbiy wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d6ed8ebnx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-minus"} {...others} />);
}

export default Component;
