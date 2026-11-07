import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp5j9_8ij.css';
import '../../css/x/x6g9eebag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xp5j9_8ij"/><path class="x6g9eebag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-chat-rounded-bold-duotone"} {...others} />);
}

export default Component;
