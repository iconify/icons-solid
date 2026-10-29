import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zztqtnb6y.css';
import '../../css/v/vxvkd-byg.css';
import '../../css/b/b-e4rzseu.css';
import '../../css/y/y8zs_kbpv.css';
import '../../css/q/q71xzgbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zztqtnb6y"/><path class="vxvkd-byg wm-deco"/><path class="b-e4rzseu wm-deco"/><path class="y8zs_kbpv"/><path class="q71xzgbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:music-note-blueprint"} {...others} />);
}

export default Component;
