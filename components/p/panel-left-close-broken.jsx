import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pq26m6iud.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/r/r1l_in_mz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pq26m6iud"/><path class="ml0cb1b5h"/><path class="r1l_in_mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-close-broken"} {...others} />);
}

export default Component;
