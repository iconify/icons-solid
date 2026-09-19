import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tl_bl2bka.css';
import '../../css/v/ve3a_2bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tl_bl2bka"/><path class="ve3a_2bdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-square-dot"} {...others} />);
}

export default Component;
