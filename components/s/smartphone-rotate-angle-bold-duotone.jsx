import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivg_vebxq.css';
import '../../css/i/i_hca-bhh.css';
import '../../css/e/eh_zu7brz.css';
import '../../css/d/dg-nofnle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ivg_vebxq"/><path class="i_hca-bhh"/><path class="eh_zu7brz"/><path class="dg-nofnle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-angle-bold-duotone"} {...others} />);
}

export default Component;
