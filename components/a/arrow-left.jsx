import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t1mywg2eu.css';
import '../../css/s/su_0fqb0p.css';
import '../../css/n/njxkiiehp.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t1mywg2eu"/><path class="su_0fqb0p"/><path class="njxkiiehp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-left"} {...others} />);
}

export default Component;
