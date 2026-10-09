import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlvqqvj3n.css';
import '../../css/y/yoqabzmii.css';
import '../../css/u/u99hd5bja.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zlvqqvj3n"/><path class="yoqabzmii"/><path class="u99hd5bja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camper-van-20"} {...others} />);
}

export default Component;
