import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ns504wbae.css';
import '../../css/u/ux1axybpz.css';
import '../../css/i/i6k4p77-r.css';
import '../../css/z/zya93rpof.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ns504wbae"/><path class="ux1axybpz"/><path class="i6k4p77-r"/><path class="zya93rpof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:teacher"} {...others} />);
}

export default Component;
