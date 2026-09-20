import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bvb7sibpb.css';
import '../../css/i/i5qce4b9c.css';
import '../../css/m/m08nw2b3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bvb7sibpb"/><path class="i5qce4b9c"/><path class="m08nw2b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:archive-sharp-duotone"} {...others} />);
}

export default Component;
