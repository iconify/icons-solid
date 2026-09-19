import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mlny4cc9w.css';
import '../../css/y/yurp_mbtj.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsWoozyNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="mlny4cc9w"/><path class="yurp_mbtj"/></g><defs><clipPath id="healthiconsWoozyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:woozy-negative"} {...others} />);
}

export default Component;
