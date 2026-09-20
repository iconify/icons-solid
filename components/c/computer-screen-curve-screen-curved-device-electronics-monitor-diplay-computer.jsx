import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzzlmdb7m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xzzlmdb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-screen-curve-screen-curved-device-electronics-monitor-diplay-computer"} {...others} />);
}

export default Component;
