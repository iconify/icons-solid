import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk7-rkadp.css';
import '../../css/k/k_mk90fyx.css';
import '../../css/f/fhg9q1beh.css';
import '../../css/p/p6shp21zo.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nk7-rkadp"/><path class="k_mk90fyx"/><path class="fhg9q1beh"/><path class="p6shp21zo"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-plus-48"} {...others} />);
}

export default Component;
