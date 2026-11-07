import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcnw7hm5u.css';
import '../../css/r/rca2b-bti.css';
import '../../css/j/jkmhhzb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lcnw7hm5u"/><path class="rca2b-bti"/><path class="jkmhhzb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-minimalistic-outline"} {...others} />);
}

export default Component;
