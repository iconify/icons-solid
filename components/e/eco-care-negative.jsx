import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o89gnlb_l.css';
import '../../css/b/bne23rbhf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsEcoCareNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="o89gnlb_l"/><path class="bne23rbhf"/></g><defs><clipPath id="healthiconsEcoCareNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:eco-care-negative"} {...others} />);
}

export default Component;
