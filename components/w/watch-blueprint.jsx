import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vv-k2tfml.css';
import '../../css/q/q-9d4mbse.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/w/wqx63we6h.css';
import '../../css/a/anua2ob4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vv-k2tfml wm-deco"/><path class="q-9d4mbse wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="wm-k wqx63we6h"/><path class="anua2ob4h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:watch-blueprint"} {...others} />);
}

export default Component;
