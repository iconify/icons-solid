import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rtrl0bc1m.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/g/gjz7habrb.css';
import '../../css/z/zfjkdbb0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rtrl0bc1m"/><path class="pq5xj2bli"/><path class="gjz7habrb"/><path class="zfjkdbb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-linear"} {...others} />);
}

export default Component;
