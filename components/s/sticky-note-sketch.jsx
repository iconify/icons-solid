import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lyph-t_jj.css';
import '../../css/z/z46hetcke.css';
import '../../css/t/t_ix-vbfv.css';
import '../../css/t/tsq-02buu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lyph-t_jj"/><path class="wm-a z46hetcke"/><path class="t_ix-vbfv wm-k"/><path class="tsq-02buu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sticky-note-sketch"} {...others} />);
}

export default Component;
