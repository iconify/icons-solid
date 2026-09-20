import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xz5d5oufl.css';
import '../../css/c/cs4tpjbzq.css';
import '../../css/g/g8f1kkbcw.css';
import '../../css/c/cxa1cto1s.css';
import '../../css/l/ly3239drt.css';
import '../../css/q/qzj58yb1j.css';
import '../../css/d/dd-9961wi.css';
import '../../css/i/ivadpvgux.css';
import '../../css/f/fknxmxb-z.css';
import '../../css/t/t9qqkbc_f.css';
import '../../css/b/bjcj_dbjd.css';
import '../../css/d/d3vzj_byc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xz5d5oufl"/><path class="cs4tpjbzq"/><path class="g8f1kkbcw"/><path class="cxa1cto1s"/><path class="ly3239drt"/><path class="qzj58yb1j"/><path class="dd-9961wi"/><path class="ivadpvgux"/><path class="fknxmxb-z"/><path class="t9qqkbc_f"/><path class="bjcj_dbjd"/><path class="d3vzj_byc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bitten-bold-duotone"} {...others} />);
}

export default Component;
