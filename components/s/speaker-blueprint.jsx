import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q8vj19bug.css';
import '../../css/l/l1rie51tn.css';
import '../../css/l/li3on2b9m.css';
import '../../css/k/kmul1nokh.css';
import '../../css/n/nk75sfb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="q8vj19bug wm-deco"/><path class="l1rie51tn wm-deco"/><path class="li3on2b9m wm-k"/><path class="kmul1nokh wm-a"/><path class="nk75sfb7r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:speaker-blueprint"} {...others} />);
}

export default Component;
