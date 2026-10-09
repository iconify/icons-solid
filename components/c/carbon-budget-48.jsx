import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj2y6_b-x.css';
import '../../css/b/bew7-otna.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dj2y6_b-x"/><path class="bew7-otna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-budget-48"} {...others} />);
}

export default Component;
