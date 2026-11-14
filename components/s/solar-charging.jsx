import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/df0qolbbi.css';
import '../../css/d/dwymtlb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="df0qolbbi"/><path class="dwymtlb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:solar-charging"} {...others} />);
}

export default Component;
