import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s4ygatbpy.css';
import '../../css/q/qdnd6ab_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s4ygatbpy"/><path class="qdnd6ab_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-clock-duotone"} {...others} />);
}

export default Component;
