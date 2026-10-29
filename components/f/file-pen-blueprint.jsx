import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jjhc0lb4s.css';
import '../../css/j/jcbp368mp.css';
import '../../css/w/wsrjwex4n.css';
import '../../css/y/y2b5vr81v.css';
import '../../css/b/buaqtwbfz.css';
import '../../css/t/tv2fy5n0n.css';
import '../../css/f/fxix_iiqi.css';
import '../../css/w/wdofi-bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jjhc0lb4s wm-deco"/><path class="jcbp368mp wm-deco"/><path class="wm-deco wsrjwex4n"/><path class="wm-k y2b5vr81v"/><path class="buaqtwbfz wm-a"/><path class="tv2fy5n0n wm-s"/><path class="fxix_iiqi wm-k"/><path class="wdofi-bnf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-pen-blueprint"} {...others} />);
}

export default Component;
