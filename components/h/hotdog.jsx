import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk-1welfr.css';
import '../../css/c/cv5-yf-2z.css';
import '../../css/r/rp0yixu2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kk-1welfr"/><path class="cv5-yf-2z"/><path class="rp0yixu2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hotdog"} {...others} />);
}

export default Component;
