import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/emq1y4bzn.css';
import '../../css/x/xn3w1nbgw.css';
import '../../css/p/p-qrmibls.css';
import '../../css/i/i6nrt8nnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="emq1y4bzn"/><path class="xn3w1nbgw"/><path class="p-qrmibls"/><path class="i6nrt8nnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-line-duotone"} {...others} />);
}

export default Component;
