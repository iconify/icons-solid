import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uu2ywi0jh.css';
import '../../css/d/dzmd--vds.css';
import '../../css/o/oj7ascbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="uu2ywi0jh"/><path class="dzmd--vds"/><path class="oj7ascbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-cast-sharp-two-tone"} {...others} />);
}

export default Component;
