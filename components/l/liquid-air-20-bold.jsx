import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j93hc8t4v.css';
import '../../css/n/nmzkxebzr.css';
import '../../css/j/jz5b4ybzx.css';
import '../../css/d/dnguvwb7j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j93hc8t4v"/><path class="nmzkxebzr"/><path class="jz5b4ybzx"/><path class="dnguvwb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-air-20-bold"} {...others} />);
}

export default Component;
