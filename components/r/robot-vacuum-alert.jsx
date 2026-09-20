import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0lownbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0lownbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:robot-vacuum-alert"} {...others} />);
}

export default Component;
