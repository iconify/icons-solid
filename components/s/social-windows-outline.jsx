import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onp76ic3j.css';
import '../../css/w/walry-bzx.css';
import '../../css/s/snrgtsb3g.css';
import '../../css/v/vx39oor0k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onp76ic3j"/><path class="walry-bzx"/><path class="snrgtsb3g"/><path class="vx39oor0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-windows-outline"} {...others} />);
}

export default Component;
