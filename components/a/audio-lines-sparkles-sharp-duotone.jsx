import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hb0q4-uhx.css';
import '../../css/h/h8a5dda0k.css';
import '../../css/i/ik2waybte.css';
import '../../css/h/hdhpu_gyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="hb0q4-uhx"/><path class="h8a5dda0k"/><path class="ik2waybte"/><path class="hdhpu_gyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
