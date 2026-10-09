import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9s80l5jq.css';
import '../../css/o/o244yobqh.css';
import '../../css/g/gezrq7_ph.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o9s80l5jq"/><path class="o244yobqh"/><path class="gezrq7_ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camper-van-48-bold"} {...others} />);
}

export default Component;
