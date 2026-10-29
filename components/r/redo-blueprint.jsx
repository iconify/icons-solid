import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/al1-8xbyf.css';
import '../../css/b/bxjv56brc.css';
import '../../css/d/d0pvnoz4e.css';
import '../../css/x/xmrd7mjdn.css';
import '../../css/x/xwa576bbm.css';
import '../../css/m/mhcd6s9cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="al1-8xbyf wm-deco"/><path class="bxjv56brc wm-deco"/><path class="d0pvnoz4e wm-k"/><path class="wm-a xmrd7mjdn"/><path class="wm-k xwa576bbm"/><path class="mhcd6s9cd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:redo-blueprint"} {...others} />);
}

export default Component;
