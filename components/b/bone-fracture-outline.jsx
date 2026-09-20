import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0-domb_w.css';
import '../../css/n/n75srbbsk.css';
import '../../css/z/zsnw98_7c.css';
import '../../css/t/tc89sw18l.css';
import '../../css/y/yva3si-8m.css';
import '../../css/j/j3ld0_b4o.css';
import '../../css/n/nc2qhjafv.css';
import '../../css/e/evjesub3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w0-domb_w"/><path class="n75srbbsk"/><path class="zsnw98_7c"/><path class="tc89sw18l"/><path class="yva3si-8m"/><path class="j3ld0_b4o"/><path class="nc2qhjafv"/><path clip-rule="evenodd" class="evjesub3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-fracture-outline"} {...others} />);
}

export default Component;
