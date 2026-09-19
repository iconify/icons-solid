import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn-6hubiu.css';
import '../../css/w/w59lw5byo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vn-6hubiu"/><path class="w59lw5byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-restaurant"} {...others} />);
}

export default Component;
