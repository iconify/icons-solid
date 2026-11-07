import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw3wxe0oi.css';
import '../../css/f/fnwhem6it.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nw3wxe0oi"/><path class="fnwhem6it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notes-bold-duotone"} {...others} />);
}

export default Component;
