import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/an_j7wb5z.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/x/x4s5dzbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="an_j7wb5z"/><path class="mqtixbwqo"/><path class="x4s5dzbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-credit-card"} {...others} />);
}

export default Component;
