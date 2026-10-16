import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okw4g5bbu.css';
import '../../css/s/sbcow6bho.css';
import '../../css/l/l4c406ble.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="okw4g5bbu"/><path class="sbcow6bho"/><path class="l4c406ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chassis-ground-20-bold"} {...others} />);
}

export default Component;
