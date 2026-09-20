import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_seihrtf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p_seihrtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kali-linux-wordmark-dark"} {...others} />);
}

export default Component;
