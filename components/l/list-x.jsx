import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyn49cc7o.css';
import '../../css/f/fdxfpvb9v.css';
import '../../css/i/i0ovy20xx.css';
import '../../css/p/p4ifym9ki.css';
import '../../css/x/xmmga_baf.css';
import '../../css/l/lq6v1ycbd.css';
import '../../css/e/elkda0bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyn49cc7o wm-shadow"/><path class="fdxfpvb9v wm-k"/><path class="i0ovy20xx wm-k"/><path class="p4ifym9ki wm-s"/><path class="wm-s xmmga_baf"/><path class="lq6v1ycbd wm-s"/><path class="elkda0bxp wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list-x"} {...others} />);
}

export default Component;
