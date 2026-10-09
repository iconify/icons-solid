import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnk74hkus.css';
import '../../css/k/kwnsnzbar.css';
import '../../css/k/k5ji0xe4i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tnk74hkus"/><path class="kwnsnzbar"/><path class="k5ji0xe4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screw-48"} {...others} />);
}

export default Component;
