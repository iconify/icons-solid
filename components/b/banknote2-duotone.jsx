import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yfsl5absb.css';
import '../../css/k/k11donbcg.css';
import '../../css/w/wl3zckjly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yfsl5absb"/><path clip-rule="evenodd" class="k11donbcg"/><path class="wl3zckjly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:banknote2-duotone"} {...others} />);
}

export default Component;
