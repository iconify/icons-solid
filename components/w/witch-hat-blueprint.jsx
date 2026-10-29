import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r_-xpx-jp.css';
import '../../css/z/zmxobqbxk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/pv89slbws.css';
import '../../css/y/y875pzbpu.css';
import '../../css/e/eshsd_oei.css';
import '../../css/v/v0v7wib3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="r_-xpx-jp wm-deco"/><path class="wm-deco zmxobqbxk"/><path class="o7-ag87sb wm-deco"/><path class="pv89slbws wm-k"/><path class="wm-a y875pzbpu"/><path class="eshsd_oei wm-s"/><path class="v0v7wib3l wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:witch-hat-blueprint"} {...others} />);
}

export default Component;
