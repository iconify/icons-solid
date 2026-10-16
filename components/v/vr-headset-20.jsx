import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z15me-ble.css';
import '../../css/c/ctxclkbxg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z15me-ble"/><path class="ctxclkbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vr-headset-20"} {...others} />);
}

export default Component;
