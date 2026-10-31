import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kziyi31zu.css';
import '../../css/c/ce4fizy0w.css';
import '../../css/d/dhuewpeee.css';
import '../../css/b/byf_cebpl.css';
import '../../css/x/x-mvsfpfc.css';
import '../../css/i/ijl-9obyr.css';
import '../../css/p/psaeg3eej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kziyi31zu"/><path class="ce4fizy0w"/><path class="dhuewpeee wm-k"/><path class="byf_cebpl wm-a"/><path class="x-mvsfpfc"/><path class="ijl-9obyr"/><path class="psaeg3eej wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:skip-forward"} {...others} />);
}

export default Component;
