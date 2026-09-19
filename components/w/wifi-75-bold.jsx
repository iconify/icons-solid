import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xn_x9rbog.css';
import '../../css/h/hd6tk1bzs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="xn_x9rbog"/><path clip-rule="evenodd" class="hd6tk1bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-75-bold"} {...others} />);
}

export default Component;
