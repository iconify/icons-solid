import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nenmxynyt.css';
import '../../css/n/ne6n1lb1p.css';
import '../../css/n/nyh8z-3vx.css';
import '../../css/u/uktxk7bfy.css';
import '../../css/q/qhq3-ccss.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nenmxynyt"/><path class="ne6n1lb1p"/><path class="nyh8z-3vx"/><path class="uktxk7bfy"/><path class="qhq3-ccss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rat"} {...others} />);
}

export default Component;
