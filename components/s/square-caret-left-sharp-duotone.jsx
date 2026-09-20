import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/peryhoawc.css';
import '../../css/t/to0wy62et.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="peryhoawc"/><path class="to0wy62et"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-caret-left-sharp-duotone"} {...others} />);
}

export default Component;
