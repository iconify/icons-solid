import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv2u68byn.css';
import '../../css/h/hjfbf5arh.css';
import '../../css/u/uz5d7nbjs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wv2u68byn"/><path class="hjfbf5arh"/><path class="uz5d7nbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flower-20-bold"} {...others} />);
}

export default Component;
