import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxacx-b_k.css';
import '../../css/r/rhr_3abbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yxacx-b_k"/><path class="rhr_3abbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-link"} {...others} />);
}

export default Component;
