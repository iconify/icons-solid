import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xg6p_jbqy.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xwm12xb4n.css';
import '../../css/d/ddac4o51k.css';
import '../../css/y/yz1lcmbqq.css';
import '../../css/g/gmpr8wbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xg6p_jbqy"/><g class="mc2zb0bvp"><path class="xwm12xb4n"/><path class="ddac4o51k"/><path class="yz1lcmbqq"/><path class="gmpr8wbig"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-bold-duotone"} {...others} />);
}

export default Component;
