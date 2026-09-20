import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pimlciajz.css';
import '../../css/d/da73u8bce.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="pimlciajz"/><path class="da73u8bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:info"} {...others} />);
}

export default Component;
