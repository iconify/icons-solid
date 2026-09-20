import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uor89vbsf.css';
import '../../css/g/gtac9dspq.css';
import '../../css/v/vqm0q2-3k.css';
import '../../css/r/rvvdz1ees.css';
import '../../css/b/bhzit2a0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uor89vbsf"/><path class="gtac9dspq"/><path class="vqm0q2-3k"/><path class="rvvdz1ees"/><path class="bhzit2a0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-4-line-duotone"} {...others} />);
}

export default Component;
