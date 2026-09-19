import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlwf67b9d.css';
import '../../css/u/u4ohl8b_v.css';
import '../../css/y/yvqle-b-w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mlwf67b9d"/><path class="u4ohl8b_v"/><path class="yvqle-b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:older-person"} {...others} />);
}

export default Component;
