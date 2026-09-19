import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbg1j-b8w.css';
import '../../css/k/kk5d9nb0q.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUiSecureNegative0)" class="cuyn6tgcc"><path class="gbg1j-b8w"/><path clip-rule="evenodd" class="kk5d9nb0q"/></g><defs><clipPath id="healthiconsUiSecureNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-secure-negative"} {...others} />);
}

export default Component;
