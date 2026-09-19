import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxy8j9bns.css';
import '../../css/c/camy_vbrh.css';
import '../../css/z/zsm97zbyj.css';
import '../../css/a/asgrtlbso.css';
import '../../css/i/iad76iwuh.css';
import '../../css/n/nidx2acym.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kxy8j9bns"/><path clip-rule="evenodd" class="camy_vbrh"/><path class="zsm97zbyj"/><rect class="asgrtlbso"/><rect transform="matrix(-1 0 0 1 59 52.371)" class="iad76iwuh"/><path class="nidx2acym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:car-wash"} {...others} />);
}

export default Component;
