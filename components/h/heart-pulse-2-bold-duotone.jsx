import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1nqhxb4d.css';
import '../../css/d/dvmdl7-za.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1nqhxb4d"/><path class="dvmdl7-za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-pulse-2-bold-duotone"} {...others} />);
}

export default Component;
