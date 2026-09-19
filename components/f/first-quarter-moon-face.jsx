import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9t1v_b2q.css';
import '../../css/i/i0l9-k3qh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="q9t1v_b2q"/><path class="i0l9-k3qh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:first-quarter-moon-face"} {...others} />);
}

export default Component;
