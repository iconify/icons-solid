import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkc2bcb8o.css';
import '../../css/o/oevl03-th.css';
import '../../css/t/tv3azrqgh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pkc2bcb8o"/><path class="oevl03-th"/><path class="tv3azrqgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-restaurant"} {...others} />);
}

export default Component;
