import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz48u0_ot.css';
import '../../css/e/eszh_ubmk.css';
import '../../css/y/y5yshqqba.css';
import '../../css/w/wasqyguql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k wz48u0_ot"/><path class="eszh_ubmk wm-a"/><path class="y5yshqqba"/><path class="wasqyguql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mithai-box"} {...others} />);
}

export default Component;
