import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygn31xzau.css';
import '../../css/x/xw5_61bwy.css';
import '../../css/q/qgrtu-b6i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ygn31xzau"/><path class="xw5_61bwy"/><path class="qgrtu-b6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:small-wind-turbine-48"} {...others} />);
}

export default Component;
