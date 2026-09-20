import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kv98g033q.css';
import '../../css/t/thed6-b2p.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="kv98g033q"/><path class="thed6-b2p"/><path class="f4vx4ccga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headset-off-sharp-duotone"} {...others} />);
}

export default Component;
