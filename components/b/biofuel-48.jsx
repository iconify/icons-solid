import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqjtt0biw.css';
import '../../css/u/up2-7-ble.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zqjtt0biw"/><path class="up2-7-ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biofuel-48"} {...others} />);
}

export default Component;
