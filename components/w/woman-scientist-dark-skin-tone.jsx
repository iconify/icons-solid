import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlwpi5bef.css';
import '../../css/k/k0mn1zb9x.css';
import '../../css/q/q1m6lqamg.css';
import '../../css/l/lw3uv_bxh.css';
import '../../css/g/gkeyq4buc.css';
import '../../css/s/sudoa3bhv.css';
import '../../css/w/wlbjmwbyr.css';
import '../../css/t/tong42bwb.css';
import '../../css/x/x-1c67j3q.css';
import '../../css/g/g24o7ibvj.css';
import '../../css/b/bh-hywbjw.css';
import '../../css/j/jer1alb4s.css';
import '../../css/b/bswaa4bln.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tlwpi5bef"/><path class="k0mn1zb9x"/><path class="q1m6lqamg"/><path class="lw3uv_bxh"/><path class="gkeyq4buc"/><path class="sudoa3bhv"/><path class="wlbjmwbyr"/><path class="tong42bwb"/><path class="x-1c67j3q"/><path class="g24o7ibvj"/><path class="bh-hywbjw"/><path class="jer1alb4s"/><path class="bswaa4bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-scientist-dark-skin-tone"} {...others} />);
}

export default Component;
