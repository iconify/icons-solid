import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/d/dz7pgzvev.css';
import '../../css/q/q1ewx2bpi.css';
import '../../css/p/pt8y-ge4v.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="dz7pgzvev"/><path clip-rule="evenodd" class="q1ewx2bpi"/><path clip-rule="evenodd" class="pt8y-ge4v"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:ticket-circle"} {...others} />);
}

export default Component;
