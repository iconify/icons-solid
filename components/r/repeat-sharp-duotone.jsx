import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pipuo_b0d.css';
import '../../css/r/r1_5jubgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pipuo_b0d"/><path class="r1_5jubgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:repeat-sharp-duotone"} {...others} />);
}

export default Component;
