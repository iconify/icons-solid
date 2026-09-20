import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h52--1z7h.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="h52--1z7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:solid-state-drive"} {...others} />);
}

export default Component;
