import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j-y4i4biy.css';
import '../../css/y/yqe6_cdnh.css';
import '../../css/m/mf_m6jlzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="j-y4i4biy"/><path class="yqe6_cdnh"/><path class="mf_m6jlzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sparkles-sharp"} {...others} />);
}

export default Component;
