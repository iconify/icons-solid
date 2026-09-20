import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/p/pbjx0cciw.css';
import '../../css/u/uwhiofy0j.css';
import '../../css/e/ei794fi6p.css';
import '../../css/t/ts5ptqk6t.css';
import '../../css/g/gg36kokbr.css';
import '../../css/s/sjohn6bax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="pbjx0cciw"/><path class="uwhiofy0j"/><path class="ei794fi6p"/><path class="ts5ptqk6t"/><path class="gg36kokbr"/><path class="sjohn6bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-linear"} {...others} />);
}

export default Component;
