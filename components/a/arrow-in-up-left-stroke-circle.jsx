import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns3pdubbz.css';
import '../../css/v/vnep0m7rs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ns3pdubbz"/><path class="vnep0m7rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-left-stroke-circle"} {...others} />);
}

export default Component;
