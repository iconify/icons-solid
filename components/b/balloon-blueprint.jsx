import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iku2hs7dx.css';
import '../../css/u/ukcxkub_e.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/k/kr3doob7g.css';
import '../../css/k/kl56jmaqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iku2hs7dx wm-deco"/><path class="ukcxkub_e wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="kr3doob7g wm-k"/><path class="kl56jmaqc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:balloon-blueprint"} {...others} />);
}

export default Component;
