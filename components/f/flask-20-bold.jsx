import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkj27_b_o.css';
import '../../css/y/yhsrnr9wa.css';
import '../../css/w/w-lq_-7kx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vkj27_b_o"/><path class="yhsrnr9wa"/><path class="w-lq_-7kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flask-20-bold"} {...others} />);
}

export default Component;
