import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgrtu-b6i.css';
import '../../css/l/ldszce0qy.css';
import '../../css/q/q5jodccjc.css';
import '../../css/h/huyo77usb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgrtu-b6i"/><path class="ldszce0qy"/><path class="q5jodccjc"/><path class="huyo77usb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:community-energy-48"} {...others} />);
}

export default Component;
