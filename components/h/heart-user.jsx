import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3l5e3_rb.css';
import '../../css/p/pz1wa_8gt.css';
import '../../css/o/o3s0g5bnm.css';
import '../../css/q/qboly1b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t3l5e3_rb"/><path class="pz1wa_8gt"/><path class="o3s0g5bnm"/><path class="qboly1b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:heart-user"} {...others} />);
}

export default Component;
