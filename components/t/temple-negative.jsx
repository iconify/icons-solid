import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ux7ni_bbi.css';
import '../../css/e/ecn09ee8q.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTempleNegative0)" class="cuyn6tgcc"><path class="ux7ni_bbi"/><path clip-rule="evenodd" class="ecn09ee8q"/></g><defs><clipPath id="healthiconsTempleNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:temple-negative"} {...others} />);
}

export default Component;
