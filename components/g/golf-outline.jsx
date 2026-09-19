import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enrvvphgc.css';
import '../../css/x/xjs5b0b4b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="enrvvphgc"/><path class="xjs5b0b4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:golf-outline"} {...others} />);
}

export default Component;
