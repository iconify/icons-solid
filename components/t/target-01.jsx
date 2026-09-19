import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sn_ghebzo.css';
import '../../css/i/i_l5txb5m.css';
import '../../css/m/mia0evx_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sn_ghebzo"/><path class="i_l5txb5m"/><path class="mia0evx_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:target-01"} {...others} />);
}

export default Component;
