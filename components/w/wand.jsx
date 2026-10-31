import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhuoqkbhc.css';
import '../../css/x/x71v93bfa.css';
import '../../css/j/jq661_r5t.css';
import '../../css/x/xwovpfihe.css';
import '../../css/h/h7gstdbhi.css';
import '../../css/n/nq2ph6_xy.css';
import '../../css/e/e35oo8baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lhuoqkbhc wm-k"/><path class="wm-a x71v93bfa"/><path class="jq661_r5t wm-deco"/><path class="wm-k xwovpfihe"/><path class="h7gstdbhi wm-a"/><path class="nq2ph6_xy wm-shadow"/><path class="e35oo8baw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:wand"} {...others} />);
}

export default Component;
