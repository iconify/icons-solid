import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0i8bfbeo.css';
import '../../css/c/cq3_n-btc.css';
import '../../css/e/ep9cbbb3g.css';
import '../../css/d/d9h_fntko.css';
import '../../css/q/qslri4e6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j0i8bfbeo"/><path class="cq3_n-btc"/><path class="ep9cbbb3g"/><path class="d9h_fntko"/><path class="qslri4e6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:leaf-duotone"} {...others} />);
}

export default Component;
