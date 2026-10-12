import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-khqclun.css';
import '../../css/e/e6u7bf88s.css';
import '../../css/f/f020qv8gp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z-khqclun"/><path class="e6u7bf88s"/><path class="f020qv8gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cnc-machine-20"} {...others} />);
}

export default Component;
