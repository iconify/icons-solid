import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hf5oswbse.css';
import '../../css/j/jied2xsjb.css';
import '../../css/v/vdv47vfaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hf5oswbse"/><path class="jied2xsjb"/><path class="vdv47vfaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-duotone"} {...others} />);
}

export default Component;
