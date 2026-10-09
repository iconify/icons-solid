import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfao_6b1t.css';
import '../../css/q/qepjo_bej.css';
import '../../css/t/t9qz5obke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfao_6b1t"/><path class="qepjo_bej"/><path class="t9qz5obke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tractor-48-bold"} {...others} />);
}

export default Component;
