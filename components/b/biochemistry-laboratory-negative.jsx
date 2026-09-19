import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp_tf86jr.css';
import '../../css/p/pefn39nwn.css';
import '../../css/t/tr9nw3b9z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBiochemistryLaboratoryNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="zp_tf86jr"/><path class="pefn39nwn"/><path clip-rule="evenodd" class="tr9nw3b9z"/></g><defs><clipPath id="healthiconsBiochemistryLaboratoryNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:biochemistry-laboratory-negative"} {...others} />);
}

export default Component;
