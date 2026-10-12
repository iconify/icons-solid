import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgx717bta.css';
import '../../css/j/jfpi41xqg.css';
import '../../css/r/r8p2bpbul.css';
import '../../css/k/kvgcy3b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 5.98)" class="zgx717bta"/><ellipse transform="rotate(90 12.17 18.72)" class="jfpi41xqg"/><circle transform="rotate(90 12 5.98)" class="r8p2bpbul"/><path class="kvgcy3b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:map-pin-line-area"} {...others} />);
}

export default Component;
