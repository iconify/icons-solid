import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kfaxolbkj.css';
import '../../css/p/pg-pw1_lh.css';
import '../../css/n/nn76u1bhz.css';
import '../../css/i/i6q05pbsj.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kfaxolbkj"/><path class="pg-pw1_lh"/><path class="nn76u1bhz"/><path class="i6q05pbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-outline"} {...others} />);
}

export default Component;
