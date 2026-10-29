import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vzefylb1g.css';
import '../../css/d/d28o-jbom.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/v/vbsgrw04e.css';
import '../../css/g/g3_i1_bjs.css';
import '../../css/l/lwj7cru1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vzefylb1g wm-deco"/><path class="d28o-jbom wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="vbsgrw04e wm-k"/><path class="g3_i1_bjs wm-a"/><path class="lwj7cru1z wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:warehouse-blueprint"} {...others} />);
}

export default Component;
