import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd1e2hbvg.css';
import '../../css/k/kil03bb1o.css';
import '../../css/v/vuykdxb-n.css';
import '../../css/q/q8obiybgk.css';
import '../../css/y/y_tx2rbdz.css';
import '../../css/z/zpvwazb3b.css';
import '../../css/l/lj6-olb7k.css';
import '../../css/e/en0i15b_n.css';
import '../../css/c/cjq716bgw.css';
import '../../css/a/awk6nwmpm.css';
import '../../css/i/ilpzvutts.css';
import '../../css/a/a6n8x1bco.css';
import '../../css/t/txzkjbbte.css';
import '../../css/b/br-hcccfh.css';
import '../../css/h/hzqkvlbtn.css';
import '../../css/d/dn02afsqr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bd1e2hbvg"/><path class="kil03bb1o"/><path class="vuykdxb-n"/><path class="q8obiybgk"/><circle class="y_tx2rbdz"/><path class="zpvwazb3b"/><path class="lj6-olb7k"/><path class="en0i15b_n"/><circle class="cjq716bgw"/><path class="awk6nwmpm"/><path class="ilpzvutts"/><path class="a6n8x1bco"/><path class="txzkjbbte"/><path class="br-hcccfh"/><path class="hzqkvlbtn"/><path class="dn02afsqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:singer-medium-skin-tone"} {...others} />);
}

export default Component;
