import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zg3proamv.css';
import '../../css/p/p7aq10b2c.css';
import '../../css/r/ryluzc2qx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zg3proamv"/><path class="p7aq10b2c"/><path class="ryluzc2qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-line-duotone"} {...others} />);
}

export default Component;
