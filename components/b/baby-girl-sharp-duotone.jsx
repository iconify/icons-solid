import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvyxm7bvs.css';
import '../../css/m/mfjn8jbeg.css';
import '../../css/m/mz62r9oet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="fvyxm7bvs"/><path class="mfjn8jbeg"/><path class="mz62r9oet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-girl-sharp-duotone"} {...others} />);
}

export default Component;
