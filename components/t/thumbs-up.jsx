import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxr_0bc2h.css';
import '../../css/y/yqpjzibdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxr_0bc2h wm-a"/><path class="wm-k yqpjzibdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:thumbs-up"} {...others} />);
}

export default Component;
