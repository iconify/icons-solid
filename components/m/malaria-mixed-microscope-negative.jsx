import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e4g_87bov.css';
import '../../css/s/sg4ntioqf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMalariaMixedMicroscopeNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="e4g_87bov"/><path class="sg4ntioqf"/></g><defs><clipPath id="healthiconsMalariaMixedMicroscopeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-mixed-microscope-negative"} {...others} />);
}

export default Component;
