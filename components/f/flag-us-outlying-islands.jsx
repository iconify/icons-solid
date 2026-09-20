import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/r/r7o0ev_-j.css';
import '../../css/g/gtrrgfidl.css';
import '../../css/t/t5-gt95_o.css';
import '../../css/o/oldnoqb6t.css';
import '../../css/z/z28rt8nno.css';
import '../../css/n/ngtweslkn.css';
import '../../css/v/vmz_n6bon.css';
import '../../css/a/az1o0cc_t.css';
import '../../css/r/rmy76fbwz.css';
import '../../css/x/xzr-ecbji.css';
import '../../css/i/i5yfv7iqf.css';
import '../../css/p/pbe_s1bji.css';
import '../../css/d/duhsih5ci.css';
import '../../css/k/k4mjh5blu.css';
import '../../css/u/ugk5fgclz.css';
import '../../css/h/hm03g2bno.css';
import '../../css/s/si78w1leq.css';
import '../../css/a/arsu63bqx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="r7o0ev_-j"/><path class="gtrrgfidl"/><path class="t5-gt95_o"/><circle class="oldnoqb6t"/><circle class="z28rt8nno"/><circle class="ngtweslkn"/><circle class="vmz_n6bon"/><circle class="az1o0cc_t"/><circle class="rmy76fbwz"/><circle class="xzr-ecbji"/><circle class="i5yfv7iqf"/><circle class="pbe_s1bji"/><circle class="duhsih5ci"/><circle class="k4mjh5blu"/><circle class="ugk5fgclz"/><circle class="hm03g2bno"/><circle class="si78w1leq"/><path class="arsu63bqx"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-us-outlying-islands"} {...others} />);
}

export default Component;
