import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v-georbdi.css';
import '../../css/j/jjt8zj_pn.css';
import '../../css/w/w6_0i26ca.css';
import '../../css/r/r726_cbpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v-georbdi"/><path class="jjt8zj_pn"/><path class="w6_0i26ca"/><path class="r726_cbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hamburger-01"} {...others} />);
}

export default Component;
