import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rh1eyibzr.css';
import '../../css/h/ha_bwsbod.css';
import '../../css/h/h_mvzq5gb.css';
import '../../css/n/nqm0ahbxr.css';
import '../../css/h/hix866bpb.css';
import '../../css/l/lunrs4s0q.css';
import '../../css/x/xeh4zcbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rh1eyibzr wm-deco"/><path class="ha_bwsbod wm-deco"/><path class="h_mvzq5gb wm-deco"/><path class="nqm0ahbxr wm-k"/><path class="hix866bpb wm-a"/><path class="lunrs4s0q wm-k"/><path class="wm-a xeh4zcbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:utensils-crossed-blueprint"} {...others} />);
}

export default Component;
