import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y5btkbb_w.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/t/tuoen37fg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="y5btkbb_w"/><path class="p53xcyb3q"/><path class="tuoen37fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-scatter-bubble-sharp-two-tone"} {...others} />);
}

export default Component;
