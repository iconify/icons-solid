import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6_s1zkbf.css';
import '../../css/t/t64wjlb0q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e6_s1zkbf"/><path class="t64wjlb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-electric-20"} {...others} />);
}

export default Component;
