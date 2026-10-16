import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thh11x-om.css';
import '../../css/p/pd3wy4zwc.css';
import '../../css/n/nf3olcpnj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="thh11x-om"/><path class="pd3wy4zwc"/><path class="nf3olcpnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speedometer-48-bold"} {...others} />);
}

export default Component;
