import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev1fg5bdw.css';
import '../../css/j/j8_u0x2hx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ev1fg5bdw"/><path class="j8_u0x2hx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:crop-outline"} {...others} />);
}

export default Component;
