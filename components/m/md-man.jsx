import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5592g8sw.css';
import '../../css/p/pemo8gb-k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w5592g8sw"/><path class="pemo8gb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-man"} {...others} />);
}

export default Component;
