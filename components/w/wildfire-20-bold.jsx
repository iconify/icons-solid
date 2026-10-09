import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyix3hqdx.css';
import '../../css/f/fqywsjpmm.css';
import '../../css/s/sv88clbwm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lyix3hqdx"/><path class="fqywsjpmm"/><path class="sv88clbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wildfire-20-bold"} {...others} />);
}

export default Component;
