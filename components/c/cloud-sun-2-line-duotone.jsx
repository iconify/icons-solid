import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gw83f_1-z.css';
import '../../css/s/s7e920tsu.css';
import '../../css/i/ipyoirb8q.css';
import '../../css/u/ugs80abio.css';
import '../../css/b/biyqeebyg.css';
import '../../css/u/us27dkrpi.css';
import '../../css/r/ruy-b-vne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gw83f_1-z"/><path class="s7e920tsu"/><path class="ipyoirb8q"/><path class="ugs80abio"/><path class="biyqeebyg"/><path class="us27dkrpi"/><path class="ruy-b-vne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-sun-2-line-duotone"} {...others} />);
}

export default Component;
