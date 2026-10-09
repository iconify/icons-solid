import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pntg1acwg.css';
import '../../css/p/pu7nh0bwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pntg1acwg"/><path class="pu7nh0bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-battery-48"} {...others} />);
}

export default Component;
