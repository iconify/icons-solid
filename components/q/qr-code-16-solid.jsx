import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1cjstbjr.css';
import '../../css/h/hmdj-_xps.css';
import '../../css/e/ek2fxdfmj.css';
import '../../css/t/td4xnacgn.css';
import '../../css/v/vjl9qybqh.css';
import '../../css/p/p_qcgrbgk.css';
import '../../css/n/n-u6lkb_w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="m1cjstbjr"/><path clip-rule="evenodd" class="hmdj-_xps"/><path class="ek2fxdfmj"/><path clip-rule="evenodd" class="td4xnacgn"/><path class="vjl9qybqh"/><path clip-rule="evenodd" class="p_qcgrbgk"/><path class="n-u6lkb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:qr-code-16-solid"} {...others} />);
}

export default Component;
