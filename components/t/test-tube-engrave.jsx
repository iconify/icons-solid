import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r1x5901qb.css';
import '../../css/c/c8btfjb_a.css';
import '../../css/z/zvbq_yb6b.css';
import '../../css/c/cfmykrbut.css';
import '../../css/f/fjsedw-yo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r1x5901qb wm-k"/><path class="c8btfjb_a wm-a"/><path class="wm-shadow zvbq_yb6b"/><path class="cfmykrbut wm-k"/><path class="fjsedw-yo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:test-tube-engrave"} {...others} />);
}

export default Component;
