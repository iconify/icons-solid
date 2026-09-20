import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ojv2i-bxi.css';
import '../../css/e/eyrtj4wgt.css';
import '../../css/f/f_1b_5fjb.css';
import '../../css/r/rma5_ql1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ojv2i-bxi"/><path class="eyrtj4wgt"/><path class="f_1b_5fjb"/><path class="rma5_ql1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-linear"} {...others} />);
}

export default Component;
