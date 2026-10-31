import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0u4knefq.css';
import '../../css/i/i_0djkbxr.css';
import '../../css/t/tkfyxon9s.css';
import '../../css/n/nk-plzbji.css';
import '../../css/b/b-zjww02g.css';
import '../../css/e/en2-fib8m.css';
import '../../css/n/n3562pz7e.css';
import '../../css/t/t0v_9rb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b0u4knefq wm-k"/><path class="i_0djkbxr wm-a"/><path class="tkfyxon9s wm-deco"/><path class="nk-plzbji wm-k"/><path class="b-zjww02g wm-a"/><path class="en2-fib8m wm-shadow"/><path class="n3562pz7e wm-shine"/><path class="t0v_9rb9v wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:sparkles"} {...others} />);
}

export default Component;
