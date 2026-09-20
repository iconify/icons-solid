import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvvd7flro.css';
import '../../css/b/bwb-fhp9c.css';
import '../../css/k/kfuga_5cz.css';
import '../../css/l/lc_og-bti.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/ys1xslb0b.css';
import '../../css/l/l9ekxj1wn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dvvd7flro"/><path class="bwb-fhp9c"/><path class="kfuga_5cz"/><path class="lc_og-bti"/><g class="ij2x_72vy"><path class="ys1xslb0b"/><path class="l9ekxj1wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eagle"} {...others} />);
}

export default Component;
