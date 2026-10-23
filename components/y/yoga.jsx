import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmrjxz-dg.css';
import '../../css/r/rq08sniyy.css';
import '../../css/d/d_sq0mbey.css';
import '../../css/k/kpkyq1w5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="cmrjxz-dg"/><circle class="rq08sniyy"/><path class="d_sq0mbey"/><path class="kpkyq1w5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:yoga"} {...others} />);
}

export default Component;
