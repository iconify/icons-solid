import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8c1ilbfq.css';
import '../../css/q/qhwpupb8g.css';
import '../../css/j/jhg452mhl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o8c1ilbfq"/><path class="qhwpupb8g"/><path class="jhg452mhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-keyhole-48"} {...others} />);
}

export default Component;
