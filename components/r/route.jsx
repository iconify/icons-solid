import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/othzqd4mm.css';
import '../../css/w/wov7lk_7m.css';
import '../../css/i/i3aui9_dk.css';
import '../../css/c/c_l0q_b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="othzqd4mm wm-shadow"/><path class="wov7lk_7m"/><path class="i3aui9_dk"/><path class="c_l0q_b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:route"} {...others} />);
}

export default Component;
