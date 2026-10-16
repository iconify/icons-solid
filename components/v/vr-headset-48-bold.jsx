import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qht0pcczn.css';
import '../../css/m/mt2dtwjzm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qht0pcczn"/><path class="mt2dtwjzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vr-headset-48-bold"} {...others} />);
}

export default Component;
