import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qn84tgm0q.css';
import '../../css/p/ptqrsn5-d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qn84tgm0q"/><path class="ptqrsn5-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:orangutan"} {...others} />);
}

export default Component;
