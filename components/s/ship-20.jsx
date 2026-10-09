import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnpp6kxet.css';
import '../../css/o/o1nbqcbpn.css';
import '../../css/k/k8gd1dj3o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fnpp6kxet"/><path class="o1nbqcbpn"/><path class="k8gd1dj3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ship-20"} {...others} />);
}

export default Component;
