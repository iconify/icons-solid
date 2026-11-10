import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xua-w5blz.css';
import '../../css/l/lp_ne991v.css';
import '../../css/w/wzoit6bzn.css';
import '../../css/f/fa_g6dbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xua-w5blz"/><path class="lp_ne991v"/><path class="wzoit6bzn"/><path class="fa_g6dbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:houses"} {...others} />);
}

export default Component;
