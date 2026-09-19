import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lux4zt8kc.css';
import '../../css/a/aikblhfzb.css';
import '../../css/p/pia5khlmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lux4zt8kc"/><path class="aikblhfzb"/><path class="pia5khlmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:orientation-image-landscape-to-potrait"} {...others} />);
}

export default Component;
