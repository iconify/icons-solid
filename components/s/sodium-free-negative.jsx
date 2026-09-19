import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ycpt8bb8i.css';
import '../../css/y/yhit5qlfz.css';
import '../../css/v/vv41l5bpa.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsSodiumFreeNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="ycpt8bb8i"/><path class="yhit5qlfz"/><path clip-rule="evenodd" class="vv41l5bpa"/></g><defs><clipPath id="healthiconsSodiumFreeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sodium-free-negative"} {...others} />);
}

export default Component;
