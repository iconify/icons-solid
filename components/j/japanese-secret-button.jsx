import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5378jb8g.css';
import '../../css/t/t5e-jpbiy.css';
import '../../css/w/wmhvhjlfj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="y5378jb8g"/><path class="t5e-jpbiy"/><path class="wmhvhjlfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:japanese-secret-button"} {...others} />);
}

export default Component;
