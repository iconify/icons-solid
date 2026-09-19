import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_a46tiqm.css';
import '../../css/t/t0azqo7mr.css';
import '../../css/j/j7mo3kbwq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n_a46tiqm"/><path class="t0azqo7mr"/><path class="j7mo3kbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:zany-face"} {...others} />);
}

export default Component;
