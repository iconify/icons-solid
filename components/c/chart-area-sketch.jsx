import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ngezjftiy.css';
import '../../css/v/vbakllcin.css';
import '../../css/j/j1rrsfb2p.css';
import '../../css/g/g3cpwtupq.css';
import '../../css/f/ff8ix3a1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ngezjftiy wm-a"/><path class="vbakllcin wm-k"/><path class="j1rrsfb2p wm-k"/><path class="g3cpwtupq wm-a"/><path class="ff8ix3a1v wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-area-sketch"} {...others} />);
}

export default Component;
