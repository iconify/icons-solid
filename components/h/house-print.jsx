import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyamk_boj.css';
import '../../css/h/hq22nxb0x.css';
import '../../css/h/hxccg9byr.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="eyamk_boj"/><path clip-rule="evenodd" class="hq22nxb0x"/><path clip-rule="evenodd" class="hxccg9byr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:house-print"} {...others} />);
}

export default Component;
