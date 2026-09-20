import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e3r7v46by.css';
import '../../css/l/lsal2z6ms.css';
import '../../css/b/b19wae8jl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e3r7v46by"/><path class="lsal2z6ms"/><path class="b19wae8jl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wind-turbine-sharp-duotone"} {...others} />);
}

export default Component;
