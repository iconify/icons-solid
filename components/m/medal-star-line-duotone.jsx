import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u5a8z1bvb.css';
import '../../css/t/tu9ed8abb.css';
import '../../css/p/py9khzhop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u5a8z1bvb"/><path class="tu9ed8abb"/><path class="py9khzhop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-line-duotone"} {...others} />);
}

export default Component;
