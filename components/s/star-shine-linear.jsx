import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zak3j7beo.css';
import '../../css/x/x_jwp_bge.css';
import '../../css/a/a0gtrrbuj.css';
import '../../css/m/mhrx-fb4o.css';
import '../../css/h/hk3yrq41f.css';
import '../../css/c/c47v7pjdu.css';
import '../../css/v/vig8cw_zx.css';
import '../../css/r/rju6pr7ot.css';
import '../../css/v/v_f85vagy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zak3j7beo"/><path class="x_jwp_bge"/><path class="a0gtrrbuj"/><path class="mhrx-fb4o"/><path class="hk3yrq41f"/><path class="c47v7pjdu"/><path class="vig8cw_zx"/><path class="rju6pr7ot"/><path class="v_f85vagy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-shine-linear"} {...others} />);
}

export default Component;
