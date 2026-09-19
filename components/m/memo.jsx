import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuwvnfbis.css';
import '../../css/t/t759n8i2f.css';
import '../../css/v/v7bnm5bbd.css';
import '../../css/r/r0x32ub_l.css';
import '../../css/y/yyjb_rfmq.css';
import '../../css/j/js1euca3m.css';
import '../../css/a/a4qhsw1kc.css';
import '../../css/m/m_yr2rvdp.css';
import '../../css/c/cr-n_xwen.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fuwvnfbis"/><path class="t759n8i2f"/><path class="v7bnm5bbd"/><path class="r0x32ub_l"/><path class="yyjb_rfmq"/><path class="js1euca3m"/><path class="a4qhsw1kc"/><path class="m_yr2rvdp"/><path class="cr-n_xwen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:memo"} {...others} />);
}

export default Component;
