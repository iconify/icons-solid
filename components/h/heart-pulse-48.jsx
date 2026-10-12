import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvnfjofcq.css';
import '../../css/e/e2jvog8gd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vvnfjofcq"/><path class="e2jvog8gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heart-pulse-48"} {...others} />);
}

export default Component;
