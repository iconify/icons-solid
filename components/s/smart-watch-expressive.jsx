import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywg26_bfx.css';
import '../../css/o/onng2rbbq.css';
import '../../css/k/k71rh2btc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ywg26_bfx"/><path clip-rule="evenodd" class="onng2rbbq"/><path class="k71rh2btc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:smart-watch-expressive"} {...others} />);
}

export default Component;
