import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/em6y05bsv.css';
import '../../css/g/gutmv4bns.css';
import '../../css/r/rlhp6bb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="em6y05bsv"/><path class="gutmv4bns"/><path class="rlhp6bb4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-zoom-in-bold-duotone"} {...others} />);
}

export default Component;
