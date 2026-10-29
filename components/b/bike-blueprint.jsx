import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kv-lv_bpm.css';
import '../../css/q/q4vihtb8m.css';
import '../../css/g/g2xclxbug.css';
import '../../css/h/hhash8oux.css';
import '../../css/g/gnvaw2b3w.css';
import '../../css/l/l84yxwbfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="kv-lv_bpm wm-deco"/><path class="q4vihtb8m wm-deco"/><path class="g2xclxbug wm-deco"/><path class="hhash8oux wm-k"/><path class="gnvaw2b3w wm-a"/><path class="l84yxwbfj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bike-blueprint"} {...others} />);
}

export default Component;
