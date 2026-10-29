import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qzf3b8vsm.css';
import '../../css/v/vp63-wbkq.css';
import '../../css/s/se5x8jbpl.css';
import '../../css/v/vgawabc-n.css';
import '../../css/u/uhe1tj0vi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qzf3b8vsm"/><path class="vp63-wbkq wm-k"/><path class="se5x8jbpl wm-a"/><path class="vgawabc-n wm-k"/><path class="uhe1tj0vi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-check-big-sketch"} {...others} />);
}

export default Component;
