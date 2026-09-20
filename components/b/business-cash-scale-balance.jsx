import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gnvvaxb6j.css';
import '../../css/z/zhhen372l.css';
import '../../css/l/lw8dc180n.css';
import '../../css/j/jl444bf4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gnvvaxb6j"/><path class="zhhen372l"/><path class="lw8dc180n"/><path class="jl444bf4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-cash-scale-balance"} {...others} />);
}

export default Component;
