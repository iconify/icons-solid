import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amvs3v-lt.css';
import '../../css/k/k1w7nccir.css';
import '../../css/i/i6cvhyb1z.css';
import '../../css/k/k2sbuyjdj.css';
import '../../css/g/gkle75b_i.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/qg8n_wb1f.css';
import '../../css/l/l8_y2hs9f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="amvs3v-lt"/><path class="k1w7nccir"/><path class="i6cvhyb1z"/><path class="k2sbuyjdj"/><path class="gkle75b_i"/><g class="z04drlb1l"><path class="qg8n_wb1f"/><path class="l8_y2hs9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beverage-box"} {...others} />);
}

export default Component;
