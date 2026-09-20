import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drhsrbcsr.css';
import '../../css/z/z-jg4sjrr.css';
import '../../css/p/ptr3-9b_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="drhsrbcsr"/><path class="z-jg4sjrr"/><circle class="ptr3-9b_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lightning-ring-duotone"} {...others} />);
}

export default Component;
