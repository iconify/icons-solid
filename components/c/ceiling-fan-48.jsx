import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt-79lb5g.css';
import '../../css/g/gv8kgybmq.css';
import '../../css/c/cht4xbeio.css';
import '../../css/t/t49p7pbwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vt-79lb5g"/><path class="gv8kgybmq"/><path class="cht4xbeio"/><path class="t49p7pbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-fan-48"} {...others} />);
}

export default Component;
