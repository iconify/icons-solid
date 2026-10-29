import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/os-fgmamw.css';
import '../../css/i/in0agd6nm.css';
import '../../css/f/fzaba2bnm.css';
import '../../css/a/af1lg4blq.css';
import '../../css/s/sbnuhvbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="os-fgmamw"/><path class="in0agd6nm wm-k"/><path class="fzaba2bnm wm-a"/><path class="af1lg4blq wm-k"/><path class="sbnuhvbhi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:frown-sketch"} {...others} />);
}

export default Component;
