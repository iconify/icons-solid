import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjuulwb_p.css';
import '../../css/i/i60oecb_z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bjuulwb_p"/><path class="i60oecb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-videocam-outline"} {...others} />);
}

export default Component;
