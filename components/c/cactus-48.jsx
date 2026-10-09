import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el1pu6btt.css';
import '../../css/d/d4ndp2pgy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="el1pu6btt"/><path class="d4ndp2pgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cactus-48"} {...others} />);
}

export default Component;
