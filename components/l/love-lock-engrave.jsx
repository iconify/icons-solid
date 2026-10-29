import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wwai64oxb.css';
import '../../css/b/b2c9mzmwk.css';
import '../../css/m/m0qgth23d.css';
import '../../css/p/pdoe7fa1e.css';
import '../../css/h/h7a9wibzd.css';
import '../../css/c/cu7wb8t0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k wwai64oxb"/><path class="b2c9mzmwk wm-a"/><path class="m0qgth23d wm-shadow"/><path class="pdoe7fa1e wm-a"/><path class="h7a9wibzd wm-k"/><path class="cu7wb8t0f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-lock-engrave"} {...others} />);
}

export default Component;
