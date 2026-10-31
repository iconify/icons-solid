import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u44rn5b_q.css';
import '../../css/k/kn0dq2bql.css';
import '../../css/n/ne1n5u1tl.css';
import '../../css/k/khqog4ogk.css';
import '../../css/a/alw6upb5y.css';
import '../../css/f/ffdsaabpo.css';
import '../../css/a/a6agxhbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u44rn5b_q wm-k"/><path class="kn0dq2bql wm-deco"/><path class="ne1n5u1tl wm-k"/><path class="khqog4ogk wm-k"/><path class="alw6upb5y wm-shadow"/><path class="ffdsaabpo wm-shine"/><path class="a6agxhbti wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:notebook"} {...others} />);
}

export default Component;
