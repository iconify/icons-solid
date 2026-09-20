import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p6pu-dv5t.css';
import '../../css/d/dxsrwpial.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="p6pu-dv5t"/><path class="dxsrwpial"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-plus-sharp-duotone"} {...others} />);
}

export default Component;
