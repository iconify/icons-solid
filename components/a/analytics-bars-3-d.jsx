import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfo4ii68r.css';
import '../../css/k/kz33gz-5k.css';
import '../../css/r/rvrsyjbfe.css';
import '../../css/p/px0_hhbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gfo4ii68r"/><path class="kz33gz-5k"/><path class="rvrsyjbfe"/><path class="px0_hhbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-bars-3-d"} {...others} />);
}

export default Component;
