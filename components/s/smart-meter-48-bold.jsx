import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvxin6bpa.css';
import '../../css/q/qvo2fwbpx.css';
import '../../css/i/ipvmyugcg.css';
import '../../css/l/lvh1_3beu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rvxin6bpa"/><path class="qvo2fwbpx"/><path class="ipvmyugcg"/><path class="lvh1_3beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-48-bold"} {...others} />);
}

export default Component;
