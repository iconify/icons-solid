import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xxqvtdbzn.css';
import '../../css/z/zi03vzb0s.css';
import '../../css/w/warm4ebve.css';
import '../../css/c/c9-w6-zwy.css';
import '../../css/t/tc5e5wilv.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xxqvtdbzn"/><path class="zi03vzb0s"/><path class="warm4ebve"/><path class="c9-w6-zwy"/><path class="tc5e5wilv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:repeat"} {...others} />);
}

export default Component;
