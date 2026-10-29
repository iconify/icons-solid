import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s5nwsyvrr.css';
import '../../css/f/flrguxb2a.css';
import '../../css/m/m0_lb3jvb.css';
import '../../css/q/q1gtjxbab.css';
import '../../css/p/pv1n1dhjp.css';
import '../../css/r/rj97b7baa.css';
import '../../css/w/wu93y2b9d.css';
import '../../css/f/fenebj4jw.css';
import '../../css/j/j42xqabrt.css';
import '../../css/z/zulzfz1_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s5nwsyvrr wm-shadow"/><path class="flrguxb2a wm-shadow"/><path class="m0_lb3jvb"/><path class="q1gtjxbab"/><path class="pv1n1dhjp"/><path class="rj97b7baa wm-shine"/><path class="wm-shine wu93y2b9d"/><path class="fenebj4jw"/><path class="j42xqabrt"/><path class="zulzfz1_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:flask-conical"} {...others} />);
}

export default Component;
