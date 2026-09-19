import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fxrs_sbcx.css';
import '../../css/l/l8wbiijnb.css';
import '../../css/x/x2401pk9v.css';
import '../../css/u/uk69ylb_c.css';
import '../../css/k/kwrgczvjd.css';
import '../../css/d/dfum_kbqf.css';
import '../../css/d/d96182f_v.css';
import '../../css/d/dxj-k_b-v.css';
import '../../css/j/jbtj5s72f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="fxrs_sbcx"/><path class="l8wbiijnb"/><circle class="x2401pk9v"/><path class="uk69ylb_c"/><path class="kwrgczvjd"/><path class="dfum_kbqf"/><path class="d96182f_v"/><path class="dxj-k_b-v"/><path class="jbtj5s72f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:setting-laptop"} {...others} />);
}

export default Component;
