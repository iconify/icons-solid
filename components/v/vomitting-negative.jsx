import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-2j-kb8m.css';
import '../../css/w/wjgcwcbke.css';
import '../../css/a/as7tz3p2a.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsVomittingNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="y-2j-kb8m"/><path class="wjgcwcbke"/><path clip-rule="evenodd" class="as7tz3p2a"/></g><defs><clipPath id="healthiconsVomittingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vomitting-negative"} {...others} />);
}

export default Component;
