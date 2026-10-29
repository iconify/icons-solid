import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wt_palbew.css';
import '../../css/o/o7f98jbya.css';
import '../../css/r/r65vtx55l.css';
import '../../css/v/vbhvu6boy.css';
import '../../css/x/xsvsuubze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wt_palbew"/><path class="o7f98jbya wm-deco"/><path class="r65vtx55l wm-deco"/><path class="vbhvu6boy"/><path class="xsvsuubze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bone-blueprint"} {...others} />);
}

export default Component;
