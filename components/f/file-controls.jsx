import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_co94b4b.css';
import '../../css/k/kspi69bmz.css';
import '../../css/n/ng9516brw.css';
import '../../css/k/k_in4bc0v.css';
import '../../css/d/d4obqubwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q_co94b4b"/><path class="kspi69bmz"/><path class="ng9516brw"/><circle class="k_in4bc0v"/><circle class="d4obqubwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-controls"} {...others} />);
}

export default Component;
