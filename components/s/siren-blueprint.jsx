import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/ch_7uek8q.css';
import '../../css/n/np-blsbzy.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/q/qfvwlorad.css';
import '../../css/q/qwc4vnbsf.css';
import '../../css/i/idtixcqse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ch_7uek8q wm-deco"/><path class="np-blsbzy wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="qfvwlorad wm-k"/><path class="qwc4vnbsf wm-a"/><path class="idtixcqse wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:siren-blueprint"} {...others} />);
}

export default Component;
