import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g7fhx_bau.css';
import '../../css/e/ep3wu3byl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="g7fhx_bau"/><path class="ep3wu3byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-check-sharp-duotone"} {...others} />);
}

export default Component;
