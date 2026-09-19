import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo7aoqzxk.css';
import '../../css/l/l4be4thee.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jo7aoqzxk"/><path class="l4be4thee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-email"} {...others} />);
}

export default Component;
