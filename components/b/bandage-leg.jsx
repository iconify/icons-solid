import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpwksdmnf.css';
import '../../css/t/tydk7xb2r.css';
import '../../css/w/wsdirukuq.css';
import '../../css/k/k0r6whinq.css';
import '../../css/q/qz8yv9b2x.css';
import '../../css/o/ow_eqybbx.css';
import '../../css/l/lepbc_tlh.css';
import '../../css/o/owstqpbnc.css';
import '../../css/b/bdq4ceq1o.css';
import '../../css/x/xiaipnb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tpwksdmnf"/><path class="tydk7xb2r"/><path class="wsdirukuq"/><path class="k0r6whinq"/><path class="qz8yv9b2x"/><path class="ow_eqybbx"/><path class="lepbc_tlh"/><path class="owstqpbnc"/><path class="bdq4ceq1o"/><path class="xiaipnb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:bandage-leg"} {...others} />);
}

export default Component;
