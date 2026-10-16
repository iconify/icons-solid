import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll0lbeozm.css';
import '../../css/j/jaxt8ed6x.css';
import '../../css/c/czwa2emeh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ll0lbeozm"/><path class="jaxt8ed6x"/><path class="czwa2emeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:telemetry-20"} {...others} />);
}

export default Component;
