import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7gb1fb2h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i7gb1fb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:binoculars"} {...others} />);
}

export default Component;
