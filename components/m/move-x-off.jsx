import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ycrv7o_lb.css';
import '../../css/h/h97kjdagp.css';
import '../../css/i/itg-c1b2z.css';
import '../../css/n/ncvignbbk.css';
import '../../css/b/bd2_erdbe.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="ycrv7o_lb"/><path class="h97kjdagp"/><path class="itg-c1b2z"/><path class="ncvignbbk"/><path class="bd2_erdbe"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:move-x-off"} {...others} />);
}

export default Component;
