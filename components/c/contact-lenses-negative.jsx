import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xaaiztg2y.css';
import '../../css/b/byn2f-bjt.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsContactLensesNegative0)" class="cuyn6tgcc"><path class="xaaiztg2y"/><path clip-rule="evenodd" class="byn2f-bjt"/></g><defs><clipPath id="healthiconsContactLensesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contact-lenses-negative"} {...others} />);
}

export default Component;
