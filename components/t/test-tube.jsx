import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f0nkw3b3u.css';
import '../../css/d/djvknyp7o.css';
import '../../css/p/psdmkpbst.css';
import '../../css/k/k_nchdcps.css';
import '../../css/i/ieq2ef8aj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f0nkw3b3u wm-shadow"/><path class="djvknyp7o"/><path class="psdmkpbst"/><path class="k_nchdcps"/><path class="ieq2ef8aj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:test-tube"} {...others} />);
}

export default Component;
