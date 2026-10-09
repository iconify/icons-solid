import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_hyg4qah.css';
import '../../css/i/ik7mbfb-f.css';
import '../../css/p/pyb0afbls.css';
import '../../css/j/jgs160bgs.css';
import '../../css/x/xdiltt19v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o_hyg4qah"/><path class="ik7mbfb-f"/><path class="pyb0afbls"/><path class="jgs160bgs"/><path class="xdiltt19v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-stop-20-bold"} {...others} />);
}

export default Component;
