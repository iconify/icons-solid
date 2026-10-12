import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwpkbabou.css';
import '../../css/t/twn6trvue.css';
import '../../css/m/motikac1y.css';
import '../../css/q/qul3hj1lj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kwpkbabou"/><path class="twn6trvue"/><path class="motikac1y"/><path class="qul3hj1lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:broom-48"} {...others} />);
}

export default Component;
