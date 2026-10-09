import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug54_cbfy.css';
import '../../css/w/wfiymubcg.css';
import '../../css/q/q5gb5d1vl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ug54_cbfy"/><path class="wfiymubcg"/><path class="q5gb5d1vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rugby-20-bold"} {...others} />);
}

export default Component;
