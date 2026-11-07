import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i1vfzkb9v.css';
import '../../css/r/rifo2czrt.css';
import '../../css/c/ctgpv1blf.css';
import '../../css/y/y8fghij0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i1vfzkb9v"/><path class="rifo2czrt"/><path class="ctgpv1blf"/><path class="y8fghij0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-line-duotone"} {...others} />);
}

export default Component;
