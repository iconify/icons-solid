import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq-ctd02e.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="iq-ctd02e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:emote-happy-filled"} {...others} />);
}

export default Component;
