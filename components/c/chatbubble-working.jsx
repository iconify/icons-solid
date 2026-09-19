import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwc4nlbuu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pwc4nlbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chatbubble-working"} {...others} />);
}

export default Component;
