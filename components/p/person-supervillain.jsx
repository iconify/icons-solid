import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1e0sib4w.css';
import '../../css/d/dq5q7nbiv.css';
import '../../css/q/q-a3bn_3x.css';
import '../../css/t/te14r7cne.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="i1e0sib4w"/><path clip-rule="evenodd" class="dq5q7nbiv"/><path class="q-a3bn_3x"/><path clip-rule="evenodd" class="te14r7cne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-supervillain"} {...others} />);
}

export default Component;
