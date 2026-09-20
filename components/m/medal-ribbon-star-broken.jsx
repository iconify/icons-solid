import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vto_qpspa.css';
import '../../css/r/rmic-8buf.css';
import '../../css/n/nw92swb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vto_qpspa"/><path class="rmic-8buf"/><path class="nw92swb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbon-star-broken"} {...others} />);
}

export default Component;
