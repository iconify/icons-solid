import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yrjwchbsz.css';
import '../../css/s/snbzacpmh.css';
import '../../css/b/bezdy0b3d.css';
import '../../css/x/xmrd7mjdn.css';
import '../../css/i/ivuile69f.css';
import '../../css/m/mhcd6s9cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yrjwchbsz"/><path class="snbzacpmh wm-deco"/><path class="bezdy0b3d wm-k"/><path class="wm-a xmrd7mjdn"/><path class="ivuile69f wm-k"/><path class="mhcd6s9cd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:forward-blueprint"} {...others} />);
}

export default Component;
