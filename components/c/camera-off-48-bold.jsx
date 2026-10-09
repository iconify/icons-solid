import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxo5tubhm.css';
import '../../css/c/cw-sa1-6a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mxo5tubhm"/><path class="cw-sa1-6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-off-48-bold"} {...others} />);
}

export default Component;
