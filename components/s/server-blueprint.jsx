import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jgdqptv2h.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/eg0c6g5mr.css';
import '../../css/j/jv1tzacrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jgdqptv2h wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="eg0c6g5mr wm-k"/><path class="jv1tzacrj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-blueprint"} {...others} />);
}

export default Component;
