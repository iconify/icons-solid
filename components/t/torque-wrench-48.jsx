import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xywdqfbfw.css';
import '../../css/w/wmfwlabqo.css';
import '../../css/h/hrs6edb5n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xywdqfbfw"/><path class="wmfwlabqo"/><path class="hrs6edb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torque-wrench-48"} {...others} />);
}

export default Component;
