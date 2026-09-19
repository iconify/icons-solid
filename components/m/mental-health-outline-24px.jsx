import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3s9tzbyb.css';
import '../../css/q/qyzioi81n.css';
import '../../css/r/rl3wxjb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c3s9tzbyb"/><path class="qyzioi81n"/><path clip-rule="evenodd" class="rl3wxjb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mental-health-outline-24px"} {...others} />);
}

export default Component;
