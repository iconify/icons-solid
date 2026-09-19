import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iimqznbbx.css';
import '../../css/l/lp32v8knl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="iimqznbbx"/><path clip-rule="evenodd" class="lp32v8knl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage-1-bold"} {...others} />);
}

export default Component;
