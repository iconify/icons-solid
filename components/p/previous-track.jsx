import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjqhddb9g.css';
import '../../css/q/q1b-_nbpa.css';
import '../../css/f/f3b5r9b5b.css';
import '../../css/t/txzxaf12h.css';
import '../../css/k/kp32w4bck.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="wjqhddb9g"/><path clip-rule="evenodd" class="q1b-_nbpa"/><path class="f3b5r9b5b"/><path clip-rule="evenodd" class="txzxaf12h"/><path clip-rule="evenodd" class="kp32w4bck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:previous-track"} {...others} />);
}

export default Component;
