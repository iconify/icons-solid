import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n067cabcj.css';
import '../../css/s/snibgdcaa.css';
import '../../css/v/vqjoaw6-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="n067cabcj"/><path class="snibgdcaa"/><path class="vqjoaw6-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
