import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/af2q3gi7j.css';
import '../../css/j/jq5_liapr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="af2q3gi7j"/><path class="jq5_liapr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:shortcake"} {...others} />);
}

export default Component;
