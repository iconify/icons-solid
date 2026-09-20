import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjpnycbdq.css';
import '../../css/p/pgrdi5beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjpnycbdq"/><path class="pgrdi5beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:device-filled"} {...others} />);
}

export default Component;
