import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xj1-90b6z.css';
import '../../css/s/sob6b3b5g.css';
import '../../css/f/fvqdqgblh.css';
import '../../css/o/o9mr9xb2h.css';
import '../../css/p/pqj7dyb7e.css';
import '../../css/t/t5wcg-6rz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xj1-90b6z"/><path class="sob6b3b5g wm-deco"/><path class="fvqdqgblh wm-deco"/><path class="o9mr9xb2h wm-k"/><path class="pqj7dyb7e wm-a"/><path class="t5wcg-6rz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wreath-blueprint"} {...others} />);
}

export default Component;
