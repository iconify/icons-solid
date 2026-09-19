import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gl3_0s1xy.css';
import '../../css/o/o8a2ao5ce.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="gl3_0s1xy"/><path class="o8a2ao5ce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:non-potable-water"} {...others} />);
}

export default Component;
