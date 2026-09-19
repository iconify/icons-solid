import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb1v7pbfq.css';
import '../../css/m/moke7fbpn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pb1v7pbfq"/><path class="moke7fbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:loop"} {...others} />);
}

export default Component;
