import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_21d84hq.css';
import '../../css/l/lq73idbwi.css';
import '../../css/w/wlbr5cbsv.css';
import '../../css/y/yt5pnfbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l_21d84hq"/><path class="lq73idbwi"/><path class="wlbr5cbsv"/><path class="yt5pnfbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cook-book"} {...others} />);
}

export default Component;
