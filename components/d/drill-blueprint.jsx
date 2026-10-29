import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h1jl_pbfc.css';
import '../../css/g/giah0rbxy.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/n/n0to2bcrt.css';
import '../../css/m/m5u5l5b7g.css';
import '../../css/d/dflbmjbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h1jl_pbfc wm-deco"/><path class="giah0rbxy wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="n0to2bcrt wm-k"/><path class="m5u5l5b7g wm-a"/><path class="dflbmjbgp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drill-blueprint"} {...others} />);
}

export default Component;
