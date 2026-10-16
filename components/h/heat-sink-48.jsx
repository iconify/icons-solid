import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6gupfjay.css';
import '../../css/j/j7hxfr2_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g6gupfjay"/><path class="j7hxfr2_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-sink-48"} {...others} />);
}

export default Component;
