import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/u/u7s_9vzkd.css';
import '../../css/o/o6l1_m8up.css';
import '../../css/o/o8_eirm0g.css';
import '../../css/w/w1b3o1jpx.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="u7s_9vzkd"/><path class="o6l1_m8up"/></g><path clip-rule="evenodd" class="o8_eirm0g"/><path class="w1b3o1jpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:speaker-low-print"} {...others} />);
}

export default Component;
