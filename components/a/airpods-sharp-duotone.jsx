import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/ketk88b6c.css';
import '../../css/n/nv1312q6p.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ketk88b6c"/><path class="nv1312q6p"/><path class="rj2y4vkzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airpods-sharp-duotone"} {...others} />);
}

export default Component;
