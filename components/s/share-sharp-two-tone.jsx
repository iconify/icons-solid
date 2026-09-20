import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sdf9kvuav.css';
import '../../css/r/ranku4ptu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="sdf9kvuav"/><path class="ranku4ptu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:share-sharp-two-tone"} {...others} />);
}

export default Component;
