import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_2h7p16c.css';
import '../../css/t/t07weybnr.css';
import '../../css/v/vzue2ebav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k_2h7p16c"/><path class="t07weybnr"/><path class="vzue2ebav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-split-horizontal-duo"} {...others} />);
}

export default Component;
