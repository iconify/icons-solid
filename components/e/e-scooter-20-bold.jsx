import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m67zmkbra.css';
import '../../css/v/v2pxd9boo.css';
import '../../css/q/qj3hxybqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m67zmkbra"/><path class="v2pxd9boo"/><path class="qj3hxybqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-scooter-20-bold"} {...others} />);
}

export default Component;
