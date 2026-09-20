import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shx0bsbhg.css';
import '../../css/n/nwmj0bbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="shx0bsbhg"/><path class="nwmj0bbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mirror2-duotone"} {...others} />);
}

export default Component;
