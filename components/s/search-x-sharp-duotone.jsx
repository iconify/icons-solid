import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k79gm2b1n.css';
import '../../css/u/usximrbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="k79gm2b1n"/><path class="usximrbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-x-sharp-duotone"} {...others} />);
}

export default Component;
