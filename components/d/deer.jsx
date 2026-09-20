import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxuysxt6r.css';
import '../../css/k/ks82f6bxb.css';
import '../../css/l/l9khnabqo.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/q4juhwbax.css';
import '../../css/b/bt4pa_bah.css';
import '../../css/a/aep0n1w-z.css';
import '../../css/l/l1hq16b6j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mxuysxt6r"/><path class="ks82f6bxb"/><path class="l9khnabqo"/><g class="ij2x_72vy"><path class="q4juhwbax"/><path class="bt4pa_bah"/><path class="aep0n1w-z"/><path class="l1hq16b6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:deer"} {...others} />);
}

export default Component;
