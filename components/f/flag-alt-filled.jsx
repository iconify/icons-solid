import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi31sik8a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wi31sik8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:flag-alt-filled"} {...others} />);
}

export default Component;
