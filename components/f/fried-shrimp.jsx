import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz262cp_y.css';
import '../../css/j/ju19h-0se.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="uz262cp_y"/><path class="ju19h-0se"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:fried-shrimp"} {...others} />);
}

export default Component;
