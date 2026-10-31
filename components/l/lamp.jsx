import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sbwgn4yri.css';
import '../../css/o/osl6lvxqg.css';
import '../../css/a/aqz1ib_2h.css';
import '../../css/y/yf-fmbg7r.css';
import '../../css/z/zo1uq6brg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sbwgn4yri wm-shadow"/><path class="osl6lvxqg"/><path class="aqz1ib_2h"/><path class="yf-fmbg7r"/><path class="zo1uq6brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lamp"} {...others} />);
}

export default Component;
