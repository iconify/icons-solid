import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwmffobfh.css';
import '../../css/t/t6xc7ubwd.css';
import '../../css/t/tmle8u6kk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uwmffobfh"/><path clip-rule="evenodd" class="t6xc7ubwd"/><path class="tmle8u6kk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:running-bold"} {...others} />);
}

export default Component;
