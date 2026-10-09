import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewbuvvbog.css';
import '../../css/z/zh3_rg95y.css';
import '../../css/j/jriqj3vpn.css';
import '../../css/a/ayddllhhf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewbuvvbog"/><path class="zh3_rg95y"/><path class="jriqj3vpn"/><path class="ayddllhhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-plus-20"} {...others} />);
}

export default Component;
