import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ccx_fgbqa.css';
import '../../css/g/gymposbcv.css';
import '../../css/f/fcxee8bwt.css';
import '../../css/r/r3i1mebrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ccx_fgbqa"/><path class="gymposbcv"/><path class="fcxee8bwt"/><path class="r3i1mebrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-broken"} {...others} />);
}

export default Component;
