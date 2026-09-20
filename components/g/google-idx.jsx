import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijfd08bxj.css';
import '../../css/e/e2g2vwlvv.css';
import '../../css/c/cl9p6ablh.css';
import '../../css/b/br05jlb3j.css';
import '../../css/w/wxt8i2boy.css';
import '../../css/q/qjle2ebpg.css';
import '../../css/r/ru2_dftho.css';
import '../../css/j/jr1zj_bba.css';

const viewBox = {"width":192,"height":192};
const content = `<g class="ft5dv1b6b"><rect class="ijfd08bxj"/><rect class="e2g2vwlvv"/><rect class="cl9p6ablh"/><rect class="br05jlb3j"/><rect class="wxt8i2boy"/><rect class="qjle2ebpg"/><rect class="ru2_dftho"/><rect class="jr1zj_bba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-idx"} {...others} />);
}

export default Component;
