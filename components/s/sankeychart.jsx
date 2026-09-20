import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnukzj0as.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="wnukzj0as"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:sankeychart"} {...others} />);
}

export default Component;
