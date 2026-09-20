import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfypxpbnr.css';
import '../../css/s/smmdwpb4s.css';
import '../../css/x/xstb4kblq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kfypxpbnr"/><path class="smmdwpb4s"/><path class="xstb4kblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:winds"} {...others} />);
}

export default Component;
