import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he8tn_r2w.css';
import '../../css/v/v-rjrvbga.css';
import '../../css/t/tzq4wccji.css';
import '../../css/m/m260xpbcn.css';
import '../../css/w/weoa-bcjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="he8tn_r2w"/><rect class="v-rjrvbga"/><path class="tzq4wccji"/><path class="m260xpbcn"/><path class="weoa-bcjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:router"} {...others} />);
}

export default Component;
