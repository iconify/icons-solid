import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i46krnb5l.css';
import '../../css/h/h2i29krsh.css';
import '../../css/h/hcaie_vox.css';
import '../../css/m/mce9chbnc.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i46krnb5l"/><path class="h2i29krsh wm-shine"/><path class="hcaie_vox wm-k"/><path class="mce9chbnc wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hard-hat"} {...others} />);
}

export default Component;
