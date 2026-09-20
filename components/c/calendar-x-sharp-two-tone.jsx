import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p6vnw5bzz.css';
import '../../css/e/e1_i_hbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="p6vnw5bzz"/><path class="e1_i_hbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-x-sharp-two-tone"} {...others} />);
}

export default Component;
