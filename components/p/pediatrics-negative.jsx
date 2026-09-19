import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spsxosbvf.css';
import '../../css/m/mpp09kbpe.css';
import '../../css/t/tr9nw3b9z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPediatricsNegative0)" class="cuyn6tgcc"><path class="spsxosbvf"/><path class="mpp09kbpe"/><path clip-rule="evenodd" class="tr9nw3b9z"/></g><defs><clipPath id="healthiconsPediatricsNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pediatrics-negative"} {...others} />);
}

export default Component;
