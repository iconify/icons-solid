import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gzjvazbtc.css';
import '../../css/e/ekn5p9bfv.css';
import '../../css/b/bb9p1y-zf.css';
import '../../css/q/qqhz8pj5r.css';
import '../../css/e/e36iblb_o.css';
import '../../css/b/bxwj4cb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gzjvazbtc wm-shadow"/><path class="ekn5p9bfv"/><path class="bb9p1y-zf"/><path class="qqhz8pj5r"/><path class="e36iblb_o"/><path class="bxwj4cb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-ghost"} {...others} />);
}

export default Component;
