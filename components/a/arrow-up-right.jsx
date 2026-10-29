import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyydvubhs.css';
import '../../css/a/ayty2kbge.css';
import '../../css/l/l2-27lbsh.css';
import '../../css/k/kqurv3bzc.css';
import '../../css/n/n73fxbbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cyydvubhs wm-deco"/><path class="ayty2kbge wm-k"/><path class="l2-27lbsh wm-k"/><path class="kqurv3bzc wm-k"/><path class="n73fxbbia wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-up-right"} {...others} />);
}

export default Component;
