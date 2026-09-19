import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/n/npfw6-bkc.css';
import '../../css/e/ew_mgwbmu.css';
import '../../css/b/bbwvg1low.css';
import '../../css/q/qoqkbrbjc.css';
import '../../css/d/dod5t2-fz.css';
import '../../css/w/wpgr_hglx.css';
import '../../css/w/wiih4pbvk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="npfw6-bkc"/><path class="ew_mgwbmu"/><path class="bbwvg1low"/><path class="qoqkbrbjc"/><path class="dod5t2-fz"/><path class="wpgr_hglx"/><path class="wiih4pbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tongueoutwink2"} {...others} />);
}

export default Component;
