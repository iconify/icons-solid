import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd3xn7bgt.css';
import '../../css/y/yj19_b3-o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xd3xn7bgt"/><path class="yj19_b3-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-battery-20-bold"} {...others} />);
}

export default Component;
