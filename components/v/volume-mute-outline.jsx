import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbi1n57ce.css';
import '../../css/m/mc8nkccec.css';
import '../../css/m/m286a39yt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bbi1n57ce"/><path class="mc8nkccec"/><path class="m286a39yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:volume-mute-outline"} {...others} />);
}

export default Component;
