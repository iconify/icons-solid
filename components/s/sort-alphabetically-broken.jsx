import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i99jpsfam.css';
import '../../css/k/k_vfb7aeb.css';
import '../../css/h/hi5e58bpt.css';
import '../../css/u/u65-1ubal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i99jpsfam"/><path class="k_vfb7aeb"/><path class="hi5e58bpt"/><path class="u65-1ubal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-alphabetically-broken"} {...others} />);
}

export default Component;
