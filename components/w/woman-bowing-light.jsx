import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_-49oqy.css';
import '../../css/s/sub7qjbnq.css';
import '../../css/r/r98kkcbfx.css';
import '../../css/t/tzcc73bpd.css';
import '../../css/k/kdky4fbik.css';
import '../../css/u/ud9hs1w1v.css';
import '../../css/k/k5ih0_0mc.css';
import '../../css/k/k_c2ll8zj.css';
import '../../css/a/ael9jebrv.css';
import '../../css/d/dd7_x8bdh.css';
import '../../css/g/grlfp7mds.css';
import '../../css/b/bygoa224k.css';
import '../../css/z/z4lp9nbsb.css';
import '../../css/y/y80kb3pzy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n2_-49oqy"/><path class="sub7qjbnq"/><path class="r98kkcbfx"/><path class="tzcc73bpd"/><path class="kdky4fbik"/><path class="ud9hs1w1v"/><path class="k5ih0_0mc"/><path class="k_c2ll8zj"/><path class="ael9jebrv"/><path class="dd7_x8bdh"/><path class="grlfp7mds"/><path class="bygoa224k"/><path class="z4lp9nbsb"/><path class="y80kb3pzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-bowing-light"} {...others} />);
}

export default Component;
