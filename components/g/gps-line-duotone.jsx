import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtx0s6u8w.css';
import '../../css/z/zleje_bse.css';
import '../../css/h/hv3siab8m.css';
import '../../css/j/jft98ub-s.css';
import '../../css/e/e34edehjy.css';
import '../../css/c/cax_t5mes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xtx0s6u8w"/><path class="zleje_bse"/><path class="hv3siab8m"/><path class="jft98ub-s"/><path class="e34edehjy"/><path class="cax_t5mes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gps-line-duotone"} {...others} />);
}

export default Component;
