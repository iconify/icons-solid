import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w4srdrbby.css';
import '../../css/z/zgmm89b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="w4srdrbby"/><path class="zgmm89b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:alarm-clock-plus-sharp-duotone"} {...others} />);
}

export default Component;
