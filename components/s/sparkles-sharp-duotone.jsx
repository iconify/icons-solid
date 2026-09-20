import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dayvb9akf.css';
import '../../css/s/sxfavlbce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="dayvb9akf"/><path class="sxfavlbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sparkles-sharp-duotone"} {...others} />);
}

export default Component;
