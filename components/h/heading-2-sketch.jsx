import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qtg2lgyvc.css';
import '../../css/m/m7e7t0knj.css';
import '../../css/s/sicwxlbtc.css';
import '../../css/o/ort0590jl.css';
import '../../css/l/lmuit7b1y.css';
import '../../css/d/dlp5wzajk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qtg2lgyvc wm-k"/><path class="m7e7t0knj wm-a"/><path class="sicwxlbtc wm-s"/><path class="ort0590jl wm-k"/><path class="lmuit7b1y wm-a"/><path class="dlp5wzajk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-2-sketch"} {...others} />);
}

export default Component;
