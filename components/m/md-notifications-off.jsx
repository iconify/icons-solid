import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk4gz-bbp.css';
import '../../css/a/afn_zrbzk.css';
import '../../css/v/vcstj9lyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vk4gz-bbp"/><path class="afn_zrbzk"/><path class="vcstj9lyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-notifications-off"} {...others} />);
}

export default Component;
