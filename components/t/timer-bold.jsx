import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3l38ubpc.css';
import '../../css/z/zd-zmcwso.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="w3l38ubpc"/><path clip-rule="evenodd" class="zd-zmcwso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-bold"} {...others} />);
}

export default Component;
