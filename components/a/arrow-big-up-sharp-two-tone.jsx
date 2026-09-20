import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/prlfu8ppt.css';
import '../../css/r/recy5eaam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="prlfu8ppt"/><path class="recy5eaam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-up-sharp-two-tone"} {...others} />);
}

export default Component;
