import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q9sl2izsp.css';
import '../../css/p/poxm8pbea.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/sw8dmvvyr.css';
import '../../css/y/y0b7rab_t.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/x/x3bpq460r.css';
import '../../css/v/vrmi09zrt.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="q9sl2izsp wm-deco"/><path class="poxm8pbea wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="sw8dmvvyr wm-k"/><path class="wm-a y0b7rab_t"/><path class="v3uzkxb0u wm-s"/><path class="wm-k x3bpq460r"/><path class="vrmi09zrt wm-a"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-off-blueprint"} {...others} />);
}

export default Component;
