import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxtjutt_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxtjutt_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:connector-chart-filled"} {...others} />);
}

export default Component;
