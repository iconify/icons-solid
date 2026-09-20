import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r69d2ebvv.css';
import '../../css/t/t6qgw5b9f.css';
import '../../css/d/d468uqblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r69d2ebvv"/><path class="t6qgw5b9f"/><path class="d468uqblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-minimalistic-close-line-duotone"} {...others} />);
}

export default Component;
