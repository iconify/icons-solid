import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/em3zn9a_e.css';
import '../../css/v/va9-l_xgz.css';
import '../../css/f/ffc9sli3v.css';
import '../../css/d/ddqtrn1yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="em3zn9a_e"/><path class="va9-l_xgz"/><path class="ffc9sli3v"/><path class="ddqtrn1yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:lightbulb-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
