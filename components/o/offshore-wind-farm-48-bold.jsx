import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irdzk0b2o.css';
import '../../css/e/e11sb3kvn.css';
import '../../css/q/qe5nlvbiz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="irdzk0b2o"/><path class="e11sb3kvn"/><path class="qe5nlvbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-wind-farm-48-bold"} {...others} />);
}

export default Component;
