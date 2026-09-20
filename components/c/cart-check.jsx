import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rr6ake7ol.css';
import '../../css/t/t2s5apbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rr6ake7ol"/><path class="t2s5apbvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cart-check"} {...others} />);
}

export default Component;
