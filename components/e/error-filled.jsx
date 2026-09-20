import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mofy_3ahk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mofy_3ahk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:error-filled"} {...others} />);
}

export default Component;
