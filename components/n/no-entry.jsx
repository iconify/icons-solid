import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yj2q_q19s.css';
import '../../css/q/qj129sb-s.css';
import '../../css/r/rf2gvrbix.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yj2q_q19s"/><path class="qj129sb-s"/><path class="rf2gvrbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:no-entry"} {...others} />);
}

export default Component;
