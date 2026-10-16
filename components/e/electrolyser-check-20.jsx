import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-419acyg.css';
import '../../css/w/woh0b19bt.css';
import '../../css/p/puz5jibvr.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r-419acyg"/><path class="woh0b19bt"/><path class="puz5jibvr"/><path class="qh3-d7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-check-20"} {...others} />);
}

export default Component;
