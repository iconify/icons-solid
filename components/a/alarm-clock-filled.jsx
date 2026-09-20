import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3ochbcej.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y3ochbcej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:alarm-clock-filled"} {...others} />);
}

export default Component;
