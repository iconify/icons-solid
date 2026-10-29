import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f8kxdpb_h.css';
import '../../css/e/ev6-t-xbj.css';
import '../../css/f/f1iyce6_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f8kxdpb_h"/><path class="ev6-t-xbj wm-a"/><path class="f1iyce6_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cube-duo"} {...others} />);
}

export default Component;
