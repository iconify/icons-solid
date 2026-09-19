import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t5kvsfbun.css';
import '../../css/y/ypp-e2b-z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="t5kvsfbun"/><path class="ypp-e2b-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:fire-extinguisher"} {...others} />);
}

export default Component;
