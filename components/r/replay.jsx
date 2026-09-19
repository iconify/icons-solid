import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i-crhm2ck.css';
import '../../css/z/zr7fhzd-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i-crhm2ck"/><path class="zr7fhzd-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:replay"} {...others} />);
}

export default Component;
