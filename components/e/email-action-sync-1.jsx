import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgtq8ck2c.css';
import '../../css/j/j_yd-f80s.css';
import '../../css/m/m0h1ocbpm.css';
import '../../css/s/simta-bkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rgtq8ck2c"/><path class="j_yd-f80s"/><path class="m0h1ocbpm"/><path class="simta-bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:email-action-sync-1"} {...others} />);
}

export default Component;
