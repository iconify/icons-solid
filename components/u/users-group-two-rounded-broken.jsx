import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/t/t8nx60bkw.css';
import '../../css/c/c7w-2cb_a.css';
import '../../css/r/r_poly91m.css';
import '../../css/j/jds3y3oir.css';
import '../../css/k/k34s5gtmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="t8nx60bkw"/><path class="c7w-2cb_a"/><path class="r_poly91m"/><path class="jds3y3oir"/><path class="k34s5gtmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-broken"} {...others} />);
}

export default Component;
