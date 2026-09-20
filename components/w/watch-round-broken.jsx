import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lp8o_cbul.css';
import '../../css/b/b7h3obcxu.css';
import '../../css/p/pdsejf_aq.css';
import '../../css/c/ck7mqgwyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lp8o_cbul"/><path class="b7h3obcxu"/><path class="pdsejf_aq"/><path class="ck7mqgwyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-broken"} {...others} />);
}

export default Component;
