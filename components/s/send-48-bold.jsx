import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihvpr_l5t.css';
import '../../css/e/e_x4yrbug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ihvpr_l5t"/><path class="e_x4yrbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-48-bold"} {...others} />);
}

export default Component;
