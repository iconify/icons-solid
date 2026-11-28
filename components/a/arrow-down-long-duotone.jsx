import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huoc5pnyp.css';
import '../../css/h/h1b6u-lck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="huoc5pnyp secondary"/><path class="h1b6u-lck primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-down-long-duotone"} {...others} />);
}

export default Component;
