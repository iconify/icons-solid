import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7ra0203t.css';
import '../../css/l/l_oo4cchq.css';

const viewBox = {"width":25,"height":25};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e7ra0203t"/><path class="l_oo4cchq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bookmark-circle"} {...others} />);
}

export default Component;
