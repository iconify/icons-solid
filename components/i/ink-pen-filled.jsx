import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8d74bc_n.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="l8d74bc_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:ink-pen-filled"} {...others} />);
}

export default Component;
