import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he8tn_r2w.css';
import '../../css/f/ff9kgxjkn.css';
import '../../css/i/i_hi-o6ld.css';
import '../../css/m/m260xpbcn.css';
import '../../css/i/i59y9kbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="he8tn_r2w"/><rect class="ff9kgxjkn"/><path class="i_hi-o6ld"/><path class="m260xpbcn"/><path class="i59y9kbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:router"} {...others} />);
}

export default Component;
