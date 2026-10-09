import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p83hrs6_m.css';
import '../../css/z/zy1--_bqv.css';
import '../../css/e/ewz0dq5ob.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p83hrs6_m"/><path class="zy1--_bqv"/><path class="ewz0dq5ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:buoy-48-bold"} {...others} />);
}

export default Component;
