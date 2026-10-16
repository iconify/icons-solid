import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o640wlber.css';
import '../../css/w/woh0b19bt.css';
import '../../css/p/puz5jibvr.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o640wlber"/><path class="woh0b19bt"/><path class="puz5jibvr"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-alert-20"} {...others} />);
}

export default Component;
