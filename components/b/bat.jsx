import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpsiiab0r.css';
import '../../css/i/ivcy6gb4b.css';
import '../../css/j/jxkh7fuzr.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kltkxu7pk.css';
import '../../css/f/fnabs1bao.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dpsiiab0r"><path class="ivcy6gb4b"/><path class="jxkh7fuzr"/></g><g class="ij2x_72vy"><path class="kltkxu7pk"/><path class="fnabs1bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bat"} {...others} />);
}

export default Component;
