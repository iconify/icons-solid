import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_rw0vbdc.css';
import '../../css/i/ie4523zex.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTempleAltNegative0)" class="cuyn6tgcc"><path class="l_rw0vbdc"/><path clip-rule="evenodd" class="ie4523zex"/></g><defs><clipPath id="healthiconsTempleAltNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:temple-alt-negative"} {...others} />);
}

export default Component;
