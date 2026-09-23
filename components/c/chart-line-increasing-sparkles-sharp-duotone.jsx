import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/h/hvs1cebde.css';
import '../../css/r/rrlah7bvq.css';
import '../../css/d/ddqtrn1yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="hvs1cebde"/><path class="rrlah7bvq"/><path class="ddqtrn1yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-line-increasing-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
