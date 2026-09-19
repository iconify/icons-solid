import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onj001b8p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onj001b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:videocam-sharp"} {...others} />);
}

export default Component;
