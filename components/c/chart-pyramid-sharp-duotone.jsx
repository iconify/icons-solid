import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w19g-x7au.css';
import '../../css/y/y9lmsj0_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w19g-x7au"/><path class="y9lmsj0_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-pyramid-sharp-duotone"} {...others} />);
}

export default Component;
