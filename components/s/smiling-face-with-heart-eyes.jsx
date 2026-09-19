import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qifirlq4v.css';
import '../../css/b/bjojovhyo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qifirlq4v"/><path class="bjojovhyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:smiling-face-with-heart-eyes"} {...others} />);
}

export default Component;
