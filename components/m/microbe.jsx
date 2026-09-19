import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uy6kaqwzr.css';
import '../../css/e/e9ykj5byl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="uy6kaqwzr"/><path class="e9ykj5byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:microbe"} {...others} />);
}

export default Component;
