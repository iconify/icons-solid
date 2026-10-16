import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2_uhcczz.css';
import '../../css/v/vg640qbkh.css';
import '../../css/t/te1q42bfr.css';
import '../../css/q/q9o-nccri.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p2_uhcczz"/><path class="vg640qbkh"/><path class="te1q42bfr"/><path class="q9o-nccri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-bus-20-bold"} {...others} />);
}

export default Component;
