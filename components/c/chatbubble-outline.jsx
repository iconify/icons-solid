import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-7bggy2k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h-7bggy2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chatbubble-outline"} {...others} />);
}

export default Component;
