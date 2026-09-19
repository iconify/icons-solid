import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkn2rtb4z.css';
import '../../css/m/m6pakbbbl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wkn2rtb4z"/><path clip-rule="evenodd" class="m6pakbbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:smiling-face-with-tear"} {...others} />);
}

export default Component;
