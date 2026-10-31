import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wy-ve50jw.css';
import '../../css/c/cl25-hbps.css';
import '../../css/l/l7rw0ybiq.css';
import '../../css/k/k5qg7tv1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wy-ve50jw"/><path class="cl25-hbps"/><path class="l7rw0ybiq"/><path class="k5qg7tv1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flag-checkered"} {...others} />);
}

export default Component;
