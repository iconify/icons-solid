import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrcrhn6ti.css';
import '../../css/b/bsqvyyzse.css';
import '../../css/r/rkbc6ub9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xrcrhn6ti"/><path class="bsqvyyzse"/><path class="rkbc6ub9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:newspaper-read-man"} {...others} />);
}

export default Component;
