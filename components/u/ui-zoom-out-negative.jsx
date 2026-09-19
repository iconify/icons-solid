import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/borqfhc5e.css';
import '../../css/g/goc9ksb0s.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUiZoomOutNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="borqfhc5e"/><path class="goc9ksb0s"/></g><defs><clipPath id="healthiconsUiZoomOutNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-zoom-out-negative"} {...others} />);
}

export default Component;
