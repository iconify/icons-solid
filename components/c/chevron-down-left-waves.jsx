import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fj6d_hbgz.css';
import '../../css/t/tzagp_bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fj6d_hbgz"/><path class="tzagp_bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-down-left-waves"} {...others} />);
}

export default Component;
