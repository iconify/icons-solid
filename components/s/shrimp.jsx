import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itx68ccyz.css';
import '../../css/v/v6eumlbtx.css';
import '../../css/m/m_kau_dej.css';
import '../../css/e/egu7rjbwm.css';
import '../../css/x/x38l6t47n.css';
import '../../css/l/lc6nil-3q.css';
import '../../css/t/tl8i_8bct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="itx68ccyz"/><path class="v6eumlbtx"/><path class="m_kau_dej"/><path class="egu7rjbwm"/><path class="x38l6t47n"/><path class="lc6nil-3q"/><path class="tl8i_8bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shrimp"} {...others} />);
}

export default Component;
