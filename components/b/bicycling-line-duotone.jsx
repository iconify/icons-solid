import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/v/vu97hgmrr.css';
import '../../css/y/ym7z_obxz.css';
import '../../css/t/t0qqdlbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><circle class="vu97hgmrr"/><circle class="ym7z_obxz"/><path class="t0qqdlbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-line-duotone"} {...others} />);
}

export default Component;
