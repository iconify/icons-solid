import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfdja4b-d.css';
import '../../css/n/n8f3jmq8x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yfdja4b-d"/><path class="n8f3jmq8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flame-20-bold"} {...others} />);
}

export default Component;
