import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8l48i23l.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="r8l48i23l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:network-device-play-filled"} {...others} />);
}

export default Component;
