import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u-_p63bcs.css';
import '../../css/j/j6v-2tbep.css';
import '../../css/z/z03o_tbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="u-_p63bcs"/><path class="j6v-2tbep"/><path class="z03o_tbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ship-sharp-duotone"} {...others} />);
}

export default Component;
