import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsb0x-bvb.css';
import '../../css/q/q5st0_sjt.css';
import '../../css/e/ex6kq6bjn.css';
import '../../css/k/khx7cwb3l.css';
import '../../css/e/ewm16cc7d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jsb0x-bvb"/><path class="q5st0_sjt"/><path class="ex6kq6bjn"/><path class="khx7cwb3l"/><path class="ewm16cc7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:megaphone"} {...others} />);
}

export default Component;
