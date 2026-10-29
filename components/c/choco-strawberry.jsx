import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq2n7r90d.css';
import '../../css/w/w9bruvegk.css';
import '../../css/l/ler27_9pv.css';
import '../../css/x/xxwntoyzl.css';
import '../../css/e/er9t8tbij.css';
import '../../css/b/bh34d5nua.css';
import '../../css/v/vu95i5b9q.css';
import '../../css/i/i0qyl6bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dq2n7r90d wm-a"/><path class="w9bruvegk wm-a"/><path class="ler27_9pv wm-a"/><path class="wm-k xxwntoyzl"/><path class="er9t8tbij wm-k"/><path class="bh34d5nua wm-k"/><path class="vu95i5b9q wm-shine"/><path class="i0qyl6bwj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:choco-strawberry"} {...others} />);
}

export default Component;
