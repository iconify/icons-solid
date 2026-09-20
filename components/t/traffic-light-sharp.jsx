import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/smfbkq5iv.css';
import '../../css/a/aefmnnbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="smfbkq5iv"/><path class="aefmnnbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:traffic-light-sharp"} {...others} />);
}

export default Component;
