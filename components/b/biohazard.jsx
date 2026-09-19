import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlv--ihec.css';
import '../../css/n/nm-cakbfp.css';
import '../../css/w/wmhvhjlfj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rlv--ihec"/><path class="nm-cakbfp"/><path class="wmhvhjlfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:biohazard"} {...others} />);
}

export default Component;
