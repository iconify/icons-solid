import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4caingdq.css';
import '../../css/s/sy8emvbhk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e4caingdq"/><path class="sy8emvbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:network-nodes-48"} {...others} />);
}

export default Component;
