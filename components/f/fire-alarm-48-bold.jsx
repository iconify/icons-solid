import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajnhz1arp.css';
import '../../css/o/o2_a8_w7a.css';
import '../../css/q/qxek88lnh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ajnhz1arp"/><path class="o2_a8_w7a"/><path class="qxek88lnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-alarm-48-bold"} {...others} />);
}

export default Component;
