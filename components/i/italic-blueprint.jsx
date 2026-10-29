import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ew8up1frk.css';
import '../../css/b/bhxi4_u-l.css';
import '../../css/b/buvuav6_l.css';
import '../../css/v/vjqg_55jp.css';
import '../../css/i/i9j0shbez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ew8up1frk wm-deco"/><path class="bhxi4_u-l wm-deco"/><path class="buvuav6_l wm-k"/><path class="vjqg_55jp wm-a"/><path class="i9j0shbez wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:italic-blueprint"} {...others} />);
}

export default Component;
