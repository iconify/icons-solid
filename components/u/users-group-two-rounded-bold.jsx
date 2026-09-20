import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v0mnniwzq.css';
import '../../css/v/v1e_5xx-u.css';
import '../../css/w/w6q2lob5h.css';
import '../../css/d/dp5zcac4d.css';
import '../../css/l/l8lhr17sb.css';
import '../../css/w/w5qhdv_nw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v0mnniwzq"/><path class="v1e_5xx-u"/><path class="w6q2lob5h"/><path class="dp5zcac4d"/><path class="l8lhr17sb"/><path class="w5qhdv_nw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-bold"} {...others} />);
}

export default Component;
