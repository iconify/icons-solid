import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8l78ubrk.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="l8l78ubrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:plc-device"} {...others} />);
}

export default Component;
