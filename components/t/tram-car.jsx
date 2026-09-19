import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfd-nms3v.css';
import '../../css/d/dl8jnmb1k.css';
import '../../css/d/dwvheybtr.css';
import '../../css/q/q_fjz5x6d.css';
import '../../css/e/ehzu5kb7b.css';
import '../../css/n/nk1l2sb5z.css';
import '../../css/a/a5ljsxbtf.css';
import '../../css/e/e5chqhgyy.css';
import '../../css/v/v0ls22b5e.css';
import '../../css/o/oa44ju5bt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wfd-nms3v"/><path class="dl8jnmb1k"/><path class="dwvheybtr"/><path class="q_fjz5x6d"/><path class="ehzu5kb7b"/><path class="nk1l2sb5z"/><path class="a5ljsxbtf"/><path class="e5chqhgyy"/><path class="v0ls22b5e"/><path class="oa44ju5bt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tram-car"} {...others} />);
}

export default Component;
