import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qs-agmjdy.css';
import '../../css/c/cs3t1qbvt.css';
import '../../css/m/mmjpv4bpa.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qs-agmjdy"/><path class="cs3t1qbvt"/><path class="mmjpv4bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fruits"} {...others} />);
}

export default Component;
