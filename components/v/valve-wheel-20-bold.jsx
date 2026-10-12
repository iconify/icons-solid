import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0vq58ann.css';
import '../../css/g/gc5cgub_m.css';
import '../../css/e/e4uqd8dok.css';
import '../../css/f/fs6mmmbqs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u0vq58ann"/><path class="gc5cgub_m"/><path class="e4uqd8dok"/><path class="fs6mmmbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:valve-wheel-20-bold"} {...others} />);
}

export default Component;
