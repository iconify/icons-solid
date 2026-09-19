import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r33qufjhi.css';
import '../../css/o/o3kh53buu.css';
import '../../css/h/hfhg49b1p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r33qufjhi"/><path class="o3kh53buu"/><path class="hfhg49b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:mahjong-red-dragon"} {...others} />);
}

export default Component;
