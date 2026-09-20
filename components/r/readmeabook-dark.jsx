import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1rbdisyq.css';
import '../../css/f/frpnumb_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1rbdisyq"/><path class="frpnumb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readmeabook-dark"} {...others} />);
}

export default Component;
