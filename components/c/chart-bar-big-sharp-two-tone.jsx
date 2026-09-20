import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y58fgyb3l.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/r/rr87-gb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="y58fgyb3l"/><path class="p53xcyb3q"/><path class="rr87-gb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-bar-big-sharp-two-tone"} {...others} />);
}

export default Component;
