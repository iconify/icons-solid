import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5zpafb6d.css';
import '../../css/y/y7i36sqce.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5zpafb6d"/><path class="y7i36sqce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-horizontal-20"} {...others} />);
}

export default Component;
