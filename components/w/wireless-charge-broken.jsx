import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/g/gjz7habrb.css';
import '../../css/z/zfjkdbb0j.css';
import '../../css/l/ly0u33bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pq5xj2bli"/><path class="gjz7habrb"/><path class="zfjkdbb0j"/><path class="ly0u33bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-broken"} {...others} />);
}

export default Component;
