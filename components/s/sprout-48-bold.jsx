import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neebw0buz.css';
import '../../css/m/mg2rwedkj.css';
import '../../css/c/cek4p1-qj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="neebw0buz"/><path class="mg2rwedkj"/><path class="cek4p1-qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sprout-48-bold"} {...others} />);
}

export default Component;
