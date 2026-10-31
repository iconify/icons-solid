import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3s7sib4m.css';
import '../../css/s/syu0m2b9g.css';
import '../../css/a/ah45v-4dv.css';
import '../../css/r/rbhdliyjf.css';
import '../../css/t/tx3apu-8n.css';
import '../../css/x/x14wgya5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i3s7sib4m wm-k"/><path class="syu0m2b9g wm-a"/><path class="ah45v-4dv wm-deco"/><path class="rbhdliyjf wm-k"/><path class="tx3apu-8n wm-a"/><path class="wm-shadow x14wgya5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:plug"} {...others} />);
}

export default Component;
