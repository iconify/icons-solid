import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue2g5nbyl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ue2g5nbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jitsi-meet-light"} {...others} />);
}

export default Component;
