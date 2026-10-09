import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty8a93bmr.css';
import '../../css/r/rzu6pacwb.css';
import '../../css/p/pvt3vvkbj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ty8a93bmr"/><path class="rzu6pacwb"/><path class="pvt3vvkbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-lay-vessel-48-bold"} {...others} />);
}

export default Component;
