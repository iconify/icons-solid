import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrg2y8b_v.css';
import '../../css/e/e0a-jqb-n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrg2y8b_v"/><path class="e0a-jqb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:city-skyline-20-bold"} {...others} />);
}

export default Component;
