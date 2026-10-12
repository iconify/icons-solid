import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2gdnrblg.css';
import '../../css/l/l8kp85irh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2gdnrblg"/><path class="l8kp85irh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caravan-48"} {...others} />);
}

export default Component;
