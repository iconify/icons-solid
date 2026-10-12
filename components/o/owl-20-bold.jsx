import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2w_usb8e.css';
import '../../css/p/p0fmtdpyb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t2w_usb8e"/><path class="p0fmtdpyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:owl-20-bold"} {...others} />);
}

export default Component;
