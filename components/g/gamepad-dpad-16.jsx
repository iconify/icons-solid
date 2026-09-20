import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_k1aixrm.css';
import '../../css/q/qrzlcfwkx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k_k1aixrm"/><path clip-rule="evenodd" class="qrzlcfwkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-dpad-16"} {...others} />);
}

export default Component;
