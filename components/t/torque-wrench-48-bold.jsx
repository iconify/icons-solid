import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7he9kybi.css';
import '../../css/r/rayd8obar.css';
import '../../css/p/pq2cdhyot.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n7he9kybi"/><path class="rayd8obar"/><path class="pq2cdhyot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torque-wrench-48-bold"} {...others} />);
}

export default Component;
