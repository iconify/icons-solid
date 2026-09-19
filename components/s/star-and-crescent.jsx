import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnu6byhtm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tnu6byhtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:star-and-crescent"} {...others} />);
}

export default Component;
