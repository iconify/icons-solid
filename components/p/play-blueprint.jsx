import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c1xpabbuz.css';
import '../../css/e/ey6g4zpde.css';
import '../../css/m/mdh1f_tph.css';
import '../../css/j/jzrgssbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="c1xpabbuz wm-deco"/><path class="ey6g4zpde wm-deco"/><path class="mdh1f_tph wm-deco"/><path class="jzrgssbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:play-blueprint"} {...others} />);
}

export default Component;
