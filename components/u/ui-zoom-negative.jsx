import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r74608ahn.css';
import '../../css/o/okzwb6bvl.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUiZoomNegative0)" class="cuyn6tgcc"><path class="r74608ahn"/><path clip-rule="evenodd" class="okzwb6bvl"/></g><defs><clipPath id="healthiconsUiZoomNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-zoom-negative"} {...others} />);
}

export default Component;
