import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hat3vrldk.css';
import '../../css/j/jj7ew2vkc.css';
import '../../css/f/fztmdkzpk.css';
import '../../css/z/zbfwylorj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hat3vrldk"/><path class="jj7ew2vkc"/><path class="fztmdkzpk"/><path class="zbfwylorj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-20-bold"} {...others} />);
}

export default Component;
