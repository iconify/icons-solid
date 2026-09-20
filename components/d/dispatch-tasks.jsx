import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz0dcbb8n.css';
import '../../css/k/ki_6arbqi.css';
import '../../css/c/cg1ea_bld.css';
import '../../css/e/ef5h7htza.css';
import '../../css/w/w9_2rb0bj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGYwNZLzNi" x1="-690.518" x2="-681.375" y1="792.018" y2="782.875" gradientTransform="matrix(56 0 0 -56 38669 44353)" gradientUnits="userSpaceOnUse"><stop offset="0" class="oz0dcbb8n"/><stop offset=".55" class="ki_6arbqi"/><stop offset="1" class="cg1ea_bld"/></linearGradient><path fill="url(#SVGYwNZLzNi)" class="ef5h7htza"/><path class="w9_2rb0bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dispatch-tasks"} {...others} />);
}

export default Component;
