import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm0hlun-r.css';
import '../../css/b/bfq0kbdtf.css';
import '../../css/c/c_swoacmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tm0hlun-r"/><path class="bfq0kbdtf"/><path class="c_swoacmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gamepad-20"} {...others} />);
}

export default Component;
