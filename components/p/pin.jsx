import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/ash26wbvd.css';
import '../../css/w/wlc86acyo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ash26wbvd"/><path class="wlc86acyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:pin"} {...others} />);
}

export default Component;
