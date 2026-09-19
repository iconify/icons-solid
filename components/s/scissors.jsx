import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9fysyb0q.css';
import '../../css/p/pvqoq6bgh.css';
import '../../css/x/x-wl53b_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w9fysyb0q"/><path class="pvqoq6bgh"/><path class="x-wl53b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:scissors"} {...others} />);
}

export default Component;
