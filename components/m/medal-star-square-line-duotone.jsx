import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7mximbwp.css';
import '../../css/d/d0x28ebxk.css';
import '../../css/v/v4a-tjdlk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k7mximbwp"/><path class="d0x28ebxk"/><path class="v4a-tjdlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-square-line-duotone"} {...others} />);
}

export default Component;
