import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/estdgvbtb.css';
import '../../css/j/j7aucs4nb.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/a/ae-e09b3w.css';
import '../../css/s/s0lin7ebv.css';
import '../../css/h/hf5_do3mk.css';
import '../../css/e/ebpm9cbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="estdgvbtb"/><path class="j7aucs4nb"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="ae-e09b3w wm-a"/><path class="s0lin7ebv"/><path class="hf5_do3mk"/><path class="ebpm9cbcw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rows"} {...others} />);
}

export default Component;
