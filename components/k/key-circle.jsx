import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/i/icf_5dbdd.css';
import '../../css/p/p0e1-ebbw.css';
import '../../css/v/v2ze4lb_y.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="icf_5dbdd"/><path clip-rule="evenodd" class="p0e1-ebbw"/><path clip-rule="evenodd" class="v2ze4lb_y"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:key-circle"} {...others} />);
}

export default Component;
