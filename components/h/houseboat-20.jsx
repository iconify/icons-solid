import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv84ipf1b.css';
import '../../css/s/s2eur9scr.css';
import '../../css/e/eu4khzs_w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zv84ipf1b"/><path class="s2eur9scr"/><path class="eu4khzs_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:houseboat-20"} {...others} />);
}

export default Component;
