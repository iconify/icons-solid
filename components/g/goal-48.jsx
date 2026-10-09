import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4o5g2bkn.css';
import '../../css/o/opyhqybqx.css';
import '../../css/r/ruxeqsb0l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p4o5g2bkn"/><path class="opyhqybqx"/><path class="ruxeqsb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:goal-48"} {...others} />);
}

export default Component;
