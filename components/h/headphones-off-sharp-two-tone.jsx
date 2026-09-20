import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bty7mpj8n.css';
import '../../css/k/keaa46byq.css';
import '../../css/i/itmzxabip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bty7mpj8n"/><path class="keaa46byq"/><path class="itmzxabip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headphones-off-sharp-two-tone"} {...others} />);
}

export default Component;
