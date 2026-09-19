import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1rgijbfz.css';
import '../../css/o/o36-3ub6f.css';
import '../../css/d/d_x6embrx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="y1rgijbfz"/><path class="o36-3ub6f"/><path class="d_x6embrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-motorized-wheelchair"} {...others} />);
}

export default Component;
