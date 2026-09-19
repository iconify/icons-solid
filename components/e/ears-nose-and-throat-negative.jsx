import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxjkcj2hc.css';
import '../../css/d/dbz1wbt4w.css';
import '../../css/s/s9osw_d9h.css';
import '../../css/i/i26u7_bab.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsEarsNoseAndThroatNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="dxjkcj2hc"/><path clip-rule="evenodd" class="dbz1wbt4w"/><path class="s9osw_d9h"/><path clip-rule="evenodd" class="i26u7_bab"/></g><defs><clipPath id="healthiconsEarsNoseAndThroatNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ears-nose-and-throat-negative"} {...others} />);
}

export default Component;
