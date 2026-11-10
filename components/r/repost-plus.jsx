import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krpg-50tb.css';
import '../../css/j/j4-xy851k.css';
import '../../css/k/k1xkuvb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="krpg-50tb"/><path class="j4-xy851k"/><path class="k1xkuvb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:repost-plus"} {...others} />);
}

export default Component;
