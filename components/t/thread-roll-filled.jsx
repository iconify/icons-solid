import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p467u_usb.css';
import '../../css/r/raqdz2mxm.css';
import '../../css/r/rha2efbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p467u_usb"/><rect class="raqdz2mxm"/><rect class="rha2efbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:thread-roll-filled"} {...others} />);
}

export default Component;
