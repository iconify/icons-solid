import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq6qzmbna.css';
import '../../css/r/r0r74pb_v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yq6qzmbna"/><path class="r0r74pb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ticket-20-bold"} {...others} />);
}

export default Component;
