import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezpwbhb1t.css';
import '../../css/p/p9mccbcgw.css';
import '../../css/j/jw2qf6buy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ezpwbhb1t"/><path class="p9mccbcgw"/><path class="jw2qf6buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-tower-48"} {...others} />);
}

export default Component;
