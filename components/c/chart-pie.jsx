import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j8pqv0byw.css';
import '../../css/e/eop_7_bke.css';
import '../../css/c/corhc3bdw.css';
import '../../css/h/hem9k8hlk.css';
import '../../css/g/ga5-o6kfl.css';
import '../../css/i/i-aopobst.css';
import '../../css/k/khsbjpbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j8pqv0byw wm-shadow"/><path class="eop_7_bke"/><path class="corhc3bdw"/><path class="hem9k8hlk"/><path class="ga5-o6kfl"/><path class="i-aopobst wm-shine"/><path class="khsbjpbqw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-pie"} {...others} />);
}

export default Component;
