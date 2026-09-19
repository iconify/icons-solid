import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mpg23qkmm.css';
import '../../css/n/nc36z5bxi.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUrologyNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="mpg23qkmm"/><path class="nc36z5bxi"/></g><defs><clipPath id="healthiconsUrologyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:urology-negative"} {...others} />);
}

export default Component;
