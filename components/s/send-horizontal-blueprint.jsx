import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mi93eg5bq.css';
import '../../css/y/y54jm9wsc.css';
import '../../css/v/vdwfx9spf.css';
import '../../css/s/s50qotckc.css';
import '../../css/h/h0rhmfbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mi93eg5bq wm-deco"/><path class="wm-deco y54jm9wsc"/><path class="vdwfx9spf wm-deco"/><path class="s50qotckc wm-k"/><path class="h0rhmfbpn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-horizontal-blueprint"} {...others} />);
}

export default Component;
