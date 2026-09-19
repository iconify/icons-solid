import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liy7sib8p.css';
import '../../css/o/onabgabdi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="liy7sib8p"/><path class="onabgabdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:videocam-off-outline"} {...others} />);
}

export default Component;
