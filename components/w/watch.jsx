import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yc-k2-bov.css';
import '../../css/n/n-l2-abgc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yc-k2-bov"/><path class="n-l2-abgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:watch"} {...others} />);
}

export default Component;
