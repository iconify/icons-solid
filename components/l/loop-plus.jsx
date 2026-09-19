import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0m1_x3ck.css';
import '../../css/y/yrz1h7rxd.css';
import '../../css/g/gb-mx-mkt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0m1_x3ck"/><path class="yrz1h7rxd"/><path class="gb-mx-mkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:loop-plus"} {...others} />);
}

export default Component;
