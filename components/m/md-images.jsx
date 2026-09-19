import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we9xjz3rp.css';
import '../../css/g/g2vc8actl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we9xjz3rp"/><path class="g2vc8actl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-images"} {...others} />);
}

export default Component;
