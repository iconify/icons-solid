import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b-32ldj2j.css';
import '../../css/m/mmpra8jtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="b-32ldj2j"/><path class="mmpra8jtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brain-cog-sharp-duotone"} {...others} />);
}

export default Component;
