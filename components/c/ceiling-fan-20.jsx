import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbusism_o.css';
import '../../css/w/wg80aqv_q.css';
import '../../css/z/zc-n46vmj.css';
import '../../css/f/fujwj-hky.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nbusism_o"/><path class="wg80aqv_q"/><path class="zc-n46vmj"/><path class="fujwj-hky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-fan-20"} {...others} />);
}

export default Component;
