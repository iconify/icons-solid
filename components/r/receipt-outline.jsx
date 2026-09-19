import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcu1bjbdy.css';
import '../../css/m/mcqy7wbbq.css';
import '../../css/c/c9hgkzb7l.css';
import '../../css/q/qlowtstmq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kcu1bjbdy"/><path clip-rule="evenodd" class="mcqy7wbbq"/><path class="c9hgkzb7l"/><path clip-rule="evenodd" class="qlowtstmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:receipt-outline"} {...others} />);
}

export default Component;
