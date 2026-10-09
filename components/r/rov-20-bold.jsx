import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpg9aibwt.css';
import '../../css/q/q3hpk7_5q.css';
import '../../css/u/u-2mnlbwy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lpg9aibwt"/><path class="q3hpk7_5q"/><path class="u-2mnlbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rov-20-bold"} {...others} />);
}

export default Component;
