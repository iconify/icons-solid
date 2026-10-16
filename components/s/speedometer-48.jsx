import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_r7mhbff.css';
import '../../css/n/nrcinobha.css';
import '../../css/r/rvdcy0bsg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_r7mhbff"/><path class="nrcinobha"/><path class="rvdcy0bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speedometer-48"} {...others} />);
}

export default Component;
