import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncnjsrrtg.css';
import '../../css/m/mo1ard8kh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ncnjsrrtg"/><path class="mo1ard8kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gearbox-20-bold"} {...others} />);
}

export default Component;
