import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1a2yab2r.css';
import '../../css/g/g4jfx9s0y.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMediumBarsNegative0)" class="cuyn6tgcc"><path class="s1a2yab2r"/><path clip-rule="evenodd" class="g4jfx9s0y"/></g><defs><clipPath id="healthiconsMediumBarsNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medium-bars-negative"} {...others} />);
}

export default Component;
