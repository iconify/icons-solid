import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lohtn_b8c.css';
import '../../css/s/sxqrc8bgf.css';
import '../../css/e/e932pzb0e.css';
import '../../css/w/weeybfgxm.css';
import '../../css/w/wberp_b3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lohtn_b8c"/><path class="sxqrc8bgf"/><path class="e932pzb0e"/><path class="weeybfgxm"/><path class="wberp_b3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lock-key"} {...others} />);
}

export default Component;
