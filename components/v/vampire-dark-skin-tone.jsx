import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phy7n3bwt.css';
import '../../css/k/kbdbo3f7j.css';
import '../../css/v/vg9h1e8fs.css';
import '../../css/k/k94itcccc.css';
import '../../css/u/u3t6x728v.css';
import '../../css/d/d9cwn370d.css';
import '../../css/r/rd05tabca.css';
import '../../css/v/v2goih2cr.css';
import '../../css/s/s6z6uzbbw.css';
import '../../css/m/m9v3nn8xv.css';
import '../../css/s/s3e76vx_l.css';
import '../../css/m/mqzd1dpge.css';
import '../../css/g/g5-g0hbyn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="phy7n3bwt"/><path class="kbdbo3f7j"/><path class="vg9h1e8fs"/><path class="k94itcccc"/><path class="u3t6x728v"/><path class="d9cwn370d"/><path class="rd05tabca"/><path class="v2goih2cr"/><path class="s6z6uzbbw"/><path class="m9v3nn8xv"/><path class="s3e76vx_l"/><path class="mqzd1dpge"/><path class="g5-g0hbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:vampire-dark-skin-tone"} {...others} />);
}

export default Component;
