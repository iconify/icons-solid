import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrk3k6bsg.css';
import '../../css/a/aet0jccom.css';
import '../../css/l/lvteyqygg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rrk3k6bsg"/><path class="aet0jccom"/><path clip-rule="evenodd" class="lvteyqygg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-2-outline"} {...others} />);
}

export default Component;
