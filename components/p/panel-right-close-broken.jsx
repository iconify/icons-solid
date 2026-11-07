import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w434_tbtm.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/m/m0ij-vkdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w434_tbtm"/><path class="ml0cb1b5h"/><path class="m0ij-vkdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-right-close-broken"} {...others} />);
}

export default Component;
