import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lia6c03rv.css';
import '../../css/t/tyqxlrbzk.css';
import '../../css/e/efke-wbwi.css';
import '../../css/r/rma5_ql1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lia6c03rv"/><path class="tyqxlrbzk"/><path class="efke-wbwi"/><path class="rma5_ql1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-line-duotone"} {...others} />);
}

export default Component;
