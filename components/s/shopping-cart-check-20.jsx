import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3h3u0bwn.css';
import '../../css/p/puz5jibvr.css';
import '../../css/q/q9z_cedxn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g3h3u0bwn"/><path class="puz5jibvr"/><path class="q9z_cedxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shopping-cart-check-20"} {...others} />);
}

export default Component;
