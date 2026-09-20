import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xruhiv3eq.css';
import '../../css/f/f9d3gkb8a.css';
import '../../css/v/vezdedbox.css';
import '../../css/v/v3ds90c7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="xruhiv3eq"/><path class="f9d3gkb8a"/><path class="vezdedbox"/><path class="v3ds90c7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-off-sharp-duotone"} {...others} />);
}

export default Component;
