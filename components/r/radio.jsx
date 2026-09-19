import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd_q1qbrk.css';
import '../../css/h/h9rbmc90b.css';
import '../../css/g/gms57lb2v.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hd_q1qbrk"/><path class="h9rbmc90b"/><path clip-rule="evenodd" class="gms57lb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:radio"} {...others} />);
}

export default Component;
