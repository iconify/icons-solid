import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ed2o0nh0x.css';
import '../../css/h/hlzmpk57l.css';
import '../../css/h/hu2pvqkyl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ed2o0nh0x"/><path class="hlzmpk57l"/><path class="hu2pvqkyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-connection-wifi-wireless-wifi-internet-server-network"} {...others} />);
}

export default Component;
