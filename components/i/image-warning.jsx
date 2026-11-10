import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c48iep45y.css';
import '../../css/p/pid1occzj.css';
import '../../css/t/tfg5epb5m.css';
import '../../css/k/kl4cpil0e.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c48iep45y"/><path class="pid1occzj"/><path class="tfg5epb5m"/><path class="kl4cpil0e"/><path class="zapwtgb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-warning"} {...others} />);
}

export default Component;
