import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ic6c7lb6f.css';
import '../../css/r/r5g8grb6p.css';
import '../../css/d/dlmywhbph.css';
import '../../css/k/kpi72jrye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ic6c7lb6f wm-deco"/><path class="r5g8grb6p wm-deco"/><path class="dlmywhbph wm-deco"/><path class="kpi72jrye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fireplace-blueprint"} {...others} />);
}

export default Component;
