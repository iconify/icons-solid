import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dhjbm9b3j.css';
import '../../css/f/fhi6i6bwb.css';
import '../../css/y/ywn2ohbea.css';
import '../../css/b/bex3b-bsk.css';
import '../../css/t/tzhzk2bji.css';
import '../../css/a/a2fuds1vb.css';
import '../../css/r/refn3rkxk.css';
import '../../css/n/nssyqj5-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dhjbm9b3j"/><path class="fhi6i6bwb"/><path class="wm-shine ywn2ohbea"/><path class="bex3b-bsk wm-k"/><path class="tzhzk2bji wm-a"/><path class="a2fuds1vb"/><path class="refn3rkxk"/><path class="nssyqj5-q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mountain"} {...others} />);
}

export default Component;
