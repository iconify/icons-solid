import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o35-s-zir.css';
import '../../css/k/ki7t3mbgc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o35-s-zir"/><path class="ki7t3mbgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:motor-scooter"} {...others} />);
}

export default Component;
