import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnwz0hxej.css';
import '../../css/s/sg4ntioqf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMalariaPvMicroscopeNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="hnwz0hxej"/><path class="sg4ntioqf"/></g><defs><clipPath id="healthiconsMalariaPvMicroscopeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-pv-microscope-negative"} {...others} />);
}

export default Component;
