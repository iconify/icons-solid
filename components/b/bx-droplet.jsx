import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7s6ofb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7s6ofb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-droplet"} {...others} />);
}

export default Component;
