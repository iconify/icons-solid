import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mriwaebth.css';
import '../../css/q/q2a0nbcka.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mriwaebth"/><path class="q2a0nbcka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whiteboard-20"} {...others} />);
}

export default Component;
