import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4hp13b9s.css';
import '../../css/z/zocg0ccej.css';
import '../../css/r/rnjbvnuht.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="j4hp13b9s"/><path class="zocg0ccej"/><path class="rnjbvnuht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-in-motorized-wheelchair-facing-right"} {...others} />);
}

export default Component;
