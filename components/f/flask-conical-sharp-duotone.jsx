import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvbb9gb-d.css';
import '../../css/r/r1a_d_bgc.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="tvbb9gb-d"/><path class="r1a_d_bgc"/><path class="dx93_50hj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flask-conical-sharp-duotone"} {...others} />);
}

export default Component;
