import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n2lht5b1f.css';
import '../../css/j/jyrpkpb6l.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="n2lht5b1f"/><path class="jyrpkpb6l"/><path class="rj2y4vkzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airpods-open-sharp-duotone"} {...others} />);
}

export default Component;
