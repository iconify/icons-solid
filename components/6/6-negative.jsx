import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6v2fnbsv.css';
import '../../css/w/wll8irj0t.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthicons6Negative0)" class="cuyn6tgcc"><path class="t6v2fnbsv"/><path clip-rule="evenodd" class="wll8irj0t"/></g><defs><clipPath id="healthicons6Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:6-negative"} {...others} />);
}

export default Component;
