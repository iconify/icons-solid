import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ifh0c7aot.css';
import '../../css/k/kqavqurtm.css';
import '../../css/v/vmwtyhbng.css';
import '../../css/f/fj8vt2b8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ifh0c7aot"/><path class="kqavqurtm"/><path class="vmwtyhbng"/><path class="fj8vt2b8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ultrasound-scanner"} {...others} />);
}

export default Component;
