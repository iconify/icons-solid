import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p9-lacccb.css';
import '../../css/a/a577cvbwn.css';
import '../../css/n/nrh0w4bxz.css';
import '../../css/l/lse0cf48s.css';
import '../../css/l/l4fchibzq.css';
import '../../css/k/k-d2lzb1w.css';
import '../../css/f/fxvp4qbry.css';
import '../../css/t/t2vllwbev.css';
import '../../css/d/d00qfseiu.css';
import '../../css/m/mj9qrrbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p9-lacccb"/><path class="a577cvbwn wm-s"/><path class="nrh0w4bxz"/><path class="lse0cf48s wm-shine"/><path class="l4fchibzq wm-k"/><path class="k-d2lzb1w wm-a"/><path class="fxvp4qbry wm-s"/><path class="t2vllwbev"/><path class="d00qfseiu"/><path class="mj9qrrbnj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-cog"} {...others} />);
}

export default Component;
