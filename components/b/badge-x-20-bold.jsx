import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-q-p1bwi.css';
import '../../css/u/u92x8ejul.css';
import '../../css/q/qgl0xjg6b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m-q-p1bwi"/><path class="u92x8ejul"/><path class="qgl0xjg6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-x-20-bold"} {...others} />);
}

export default Component;
