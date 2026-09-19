import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnlv2sbng.css';
import '../../css/b/b8q2yu59y.css';
import '../../css/b/bp-ry8byp.css';
import '../../css/u/ucfh2zb-j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fnlv2sbng"/><path class="b8q2yu59y"/><ellipse class="bp-ry8byp"/><ellipse class="ucfh2zb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-snapchat-outline"} {...others} />);
}

export default Component;
