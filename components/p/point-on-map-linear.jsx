import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bsi142u7b.css';
import '../../css/z/zv97pxbdl.css';
import '../../css/q/q4m7tjd5h.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bsi142u7b"/><path class="zv97pxbdl"/><path class="q4m7tjd5h"/><circle class="ptvu1u_4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-linear"} {...others} />);
}

export default Component;
