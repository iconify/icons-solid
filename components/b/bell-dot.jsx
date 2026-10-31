import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mzfulsbxv.css';
import '../../css/r/rgh_0_blr.css';
import '../../css/y/ymtnmml2s.css';
import '../../css/r/ricczsbtc.css';
import '../../css/r/rqrd5htoz.css';
import '../../css/t/t4-urjbta.css';
import '../../css/t/t7c1eachc.css';
import '../../css/p/pqrpxtb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mzfulsbxv wm-shadow"/><path class="rgh_0_blr wm-s"/><path class="wm-shadow ymtnmml2s"/><path class="ricczsbtc"/><path class="rqrd5htoz"/><path class="t4-urjbta wm-s"/><path class="t7c1eachc wm-s"/><path class="pqrpxtb0z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bell-dot"} {...others} />);
}

export default Component;
