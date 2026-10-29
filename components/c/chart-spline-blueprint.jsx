import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u7d2hzbvv.css';
import '../../css/b/bxjv56brc.css';
import '../../css/z/zx7-jz3bd.css';
import '../../css/l/lrg-fdc4r.css';
import '../../css/z/z2x8tcb6h.css';
import '../../css/u/uqhmd6bht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="u7d2hzbvv wm-deco"/><path class="bxjv56brc wm-deco"/><path class="wm-k zx7-jz3bd"/><path class="lrg-fdc4r wm-a"/><path class="wm-k z2x8tcb6h"/><path class="uqhmd6bht wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-spline-blueprint"} {...others} />);
}

export default Component;
