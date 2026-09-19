import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ovypwcd6f.css';
import '../../css/o/oj2tikbve.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ovypwcd6f"/><path class="oj2tikbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:smiling-face-with-sunglasses"} {...others} />);
}

export default Component;
