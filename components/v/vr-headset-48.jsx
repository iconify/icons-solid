import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj4_8bb8s.css';
import '../../css/a/a5tfz-sap.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uj4_8bb8s"/><path class="a5tfz-sap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vr-headset-48"} {...others} />);
}

export default Component;
