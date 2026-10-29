import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/akp3qbn-d.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/q/qaf5-tble.css';
import '../../css/x/x4xcptb0y.css';
import '../../css/v/va6-6v82i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="akp3qbn-d wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="qaf5-tble wm-k"/><path class="wm-a x4xcptb0y"/><path class="va6-6v82i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-lock-blueprint"} {...others} />);
}

export default Component;
