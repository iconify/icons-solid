import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wws8pq6wg.css';
import '../../css/p/padi-ibdk.css';
import '../../css/v/vh375vbaq.css';
import '../../css/k/kod19rbcy.css';
import '../../css/n/nxrl_e3_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wws8pq6wg"/><path class="padi-ibdk"/><path class="vh375vbaq"/><path class="kod19rbcy"/><path class="nxrl_e3_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich"} {...others} />);
}

export default Component;
