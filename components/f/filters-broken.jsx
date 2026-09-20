import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wr5xmnbwg.css';
import '../../css/l/l_3y53b4h.css';
import '../../css/u/u-x6mqgqh.css';
import '../../css/q/q9_xxzb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wr5xmnbwg"/><path class="l_3y53b4h"/><path class="u-x6mqgqh"/><path class="q9_xxzb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filters-broken"} {...others} />);
}

export default Component;
