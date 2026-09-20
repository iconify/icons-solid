import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivrt0wb5e.css';
import '../../css/k/kt09dibct.css';
import '../../css/c/c_8wcib4r.css';
import '../../css/g/gpr7m5bhj.css';
import '../../css/r/rmvrof9sh.css';
import '../../css/n/naeprdbjc.css';
import '../../css/e/ey8adnbhg.css';
import '../../css/f/fw-r7u5mz.css';
import '../../css/l/lf0zjhoag.css';
import '../../css/j/jc3j16jmo.css';
import '../../css/b/bu9283b5n.css';
import '../../css/q/qo3pbihjv.css';
import '../../css/z/zz83y3gyo.css';
import '../../css/i/igf3spmgo.css';

const viewBox = {"width":72,"height":72};
const content = `<g clip-rule="evenodd" class="ivrt0wb5e"><path class="kt09dibct"/><path class="c_8wcib4r"/><path class="gpr7m5bhj"/><path class="rmvrof9sh"/></g><path class="naeprdbjc"/><path class="ey8adnbhg"/><path class="fw-r7u5mz"/><path class="lf0zjhoag"/><path class="jc3j16jmo"/><path class="bu9283b5n"/><path class="qo3pbihjv"/><path class="zz83y3gyo"/><path class="igf3spmgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:input-latin-lowercase"} {...others} />);
}

export default Component;
