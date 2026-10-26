import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgrwgs-oo.css';
import '../../css/o/o3e0mvbzo.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="qgrwgs-oo"/><path clip-rule="evenodd" class="o3e0mvbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:synonym"} {...others} />);
}

export default Component;
