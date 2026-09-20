import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrtq9bbsf.css';
import '../../css/v/vu97hgmrr.css';
import '../../css/y/ym7z_obxz.css';
import '../../css/n/nuz684-gh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="mrtq9bbsf"/><circle class="vu97hgmrr"/><circle class="ym7z_obxz"/><path class="nuz684-gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-round-line-duotone"} {...others} />);
}

export default Component;
