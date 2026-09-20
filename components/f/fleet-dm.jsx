import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh_9u5nen.css';
import '../../css/p/pomhvvbhz.css';
import '../../css/y/ylrt5zbde.css';
import '../../css/w/wrf5k7n3c.css';
import '../../css/y/y71k3obmn.css';
import '../../css/k/kc3s22bpn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wh_9u5nen"/><path class="pomhvvbhz"/><path class="ylrt5zbde"/><path class="wrf5k7n3c"/><path class="y71k3obmn"/><path class="kc3s22bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fleet-dm"} {...others} />);
}

export default Component;
