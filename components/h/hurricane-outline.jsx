import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mq_nynmza.css';
import '../../css/q/q_udj0h0z.css';
import '../../css/x/x6w93yb_v.css';
import '../../css/v/vr_ysibut.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mq_nynmza"/><path class="q_udj0h0z"/><path class="x6w93yb_v"/><path class="vr_ysibut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hurricane-outline"} {...others} />);
}

export default Component;
