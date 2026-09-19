import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wc0j0g20c.css';
import '../../css/u/u_mclfbbt.css';
import '../../css/u/ucpkowjmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wc0j0g20c"/><path class="u_mclfbbt"/><path class="ucpkowjmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:in-love"} {...others} />);
}

export default Component;
