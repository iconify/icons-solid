import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xw5t5ib4d.css';
import '../../css/s/sl7r712yx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="xw5t5ib4d"/><path class="sl7r712yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bracket-arrow-down-sharp-duotone"} {...others} />);
}

export default Component;
