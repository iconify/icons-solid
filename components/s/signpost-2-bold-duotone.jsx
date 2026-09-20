import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wokh6dfzc.css';
import '../../css/v/v0y0vbb1i.css';
import '../../css/d/dn_4wqd1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wokh6dfzc"/><path class="v0y0vbb1i"/><path class="dn_4wqd1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-2-bold-duotone"} {...others} />);
}

export default Component;
