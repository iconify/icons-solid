import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viyle3bdn.css';
import '../../css/i/isw4psbyy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/j98506bch.css';
import '../../css/h/h36avfbhm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="viyle3bdn"/><path class="isw4psbyy"/><g class="ij2x_72vy"><path class="j98506bch"/><path class="h36avfbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:snail"} {...others} />);
}

export default Component;
