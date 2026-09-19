import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t0qqw1byh.css';
import '../../css/k/ky3okyxql.css';
import '../../css/p/ptxp0htoe.css';
import '../../css/c/coelpybrv.css';
import '../../css/h/h21k6bcdw.css';
import '../../css/z/zfop5xbyt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t0qqw1byh"/><path class="ky3okyxql"/><path class="ptxp0htoe"/><path class="coelpybrv"/><path class="h21k6bcdw"/><path class="zfop5xbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort-amount-up"} {...others} />);
}

export default Component;
