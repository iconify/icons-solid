import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_94i78iy.css';
import '../../css/n/nds2xhawn.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCommunityMeetingNegative0)" class="cuyn6tgcc"><path class="f_94i78iy"/><path clip-rule="evenodd" class="nds2xhawn"/></g><defs><clipPath id="healthiconsCommunityMeetingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:community-meeting-negative"} {...others} />);
}

export default Component;
