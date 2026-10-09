import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8ue7ubrb.css';
import '../../css/x/x-vy4em_w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l8ue7ubrb"/><path class="x-vy4em_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-area-48-bold"} {...others} />);
}

export default Component;
