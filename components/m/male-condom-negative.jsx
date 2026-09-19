import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fe0wjtm5t.css';
import '../../css/j/jwey95bzn.css';
import '../../css/j/jr9ekh6_x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMaleCondomNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="fe0wjtm5t"/><path class="jwey95bzn"/><path class="jr9ekh6_x"/></g><defs><clipPath id="healthiconsMaleCondomNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:male-condom-negative"} {...others} />);
}

export default Component;
