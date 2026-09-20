import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzbh_urec.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/p28c7-b8k.css';
import '../../css/x/xdloo4m_h.css';
import '../../css/j/ju8xeiqzy.css';
import '../../css/k/kpzn3ybxl.css';
import '../../css/s/sqvb8-iqm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qzbh_urec"/><g class="brzn_0bpr"><path class="p28c7-b8k"/><path class="xdloo4m_h"/><circle class="ju8xeiqzy"/><circle class="kpzn3ybxl"/><path class="sqvb8-iqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stretcher"} {...others} />);
}

export default Component;
