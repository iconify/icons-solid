import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0jc9qlwi.css';
import '../../css/o/oc6wsubhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0jc9qlwi"/><path class="oc6wsubhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-video-bold-duotone"} {...others} />);
}

export default Component;
