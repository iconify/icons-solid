import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/l/l0wsz0bge.css';
import '../../css/u/u7-f98bkg.css';
import '../../css/j/jr044sswv.css';
import '../../css/t/t5koibbkf.css';
import '../../css/q/qqdkw_blr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="l0wsz0bge"/><path class="u7-f98bkg"/><ellipse class="jr044sswv"/><path class="t5koibbkf"/><path class="qqdkw_blr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-line-duotone"} {...others} />);
}

export default Component;
