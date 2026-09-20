import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4ltf1b1v.css';
import '../../css/r/rlhp6bb4t.css';
import '../../css/e/em6y05bsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z4ltf1b1v"/><path class="rlhp6bb4t"/><path class="em6y05bsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-zoom-in-bold-duotone"} {...others} />);
}

export default Component;
