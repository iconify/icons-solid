import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d_wohobfn.css';
import '../../css/m/mee3dzblk.css';
import '../../css/p/peu007b-y.css';
import '../../css/i/ias_7wphn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d_wohobfn wm-deco"/><path class="mee3dzblk wm-deco"/><path class="peu007b-y"/><path class="ias_7wphn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-blueprint"} {...others} />);
}

export default Component;
