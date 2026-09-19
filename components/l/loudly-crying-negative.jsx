import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m-bisxj3a.css';
import '../../css/z/z5687_-0x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsLoudlyCryingNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="m-bisxj3a"/><path class="z5687_-0x"/></g><defs><clipPath id="healthiconsLoudlyCryingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:loudly-crying-negative"} {...others} />);
}

export default Component;
