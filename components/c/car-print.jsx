import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e6i1gi7-e.css';
import '../../css/r/rslh1bblg.css';
import '../../css/w/wdbmhubrq.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e6i1gi7-e"/><path class="rslh1bblg"/><path class="wdbmhubrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:car-print"} {...others} />);
}

export default Component;
