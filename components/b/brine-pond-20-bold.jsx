import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feg1xxbdu.css';
import '../../css/c/cl7b560dd.css';
import '../../css/o/ozxg8x4ce.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="feg1xxbdu"/><path class="cl7b560dd"/><path class="ozxg8x4ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brine-pond-20-bold"} {...others} />);
}

export default Component;
