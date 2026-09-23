import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m66emgbjh.css';
import '../../css/k/ksu4hvb6k.css';
import '../../css/f/ff9zbvbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="m66emgbjh"/><path class="ksu4hvb6k"/><path class="ff9zbvbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cpu-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
