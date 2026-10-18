import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhz704nam.css';
import '../../css/o/odoplnlhz.css';
import '../../css/k/kv_uf3bpr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fhz704nam"/><path class="odoplnlhz"/><path class="kv_uf3bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-monitoring-20-bold"} {...others} />);
}

export default Component;
