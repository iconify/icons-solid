import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmv7858-j.css';
import '../../css/l/l755ytkgf.css';
import '../../css/q/qzbfqsbfy.css';
import '../../css/q/q_n0noqey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rmv7858-j"/><path clip-rule="evenodd" class="l755ytkgf"/><path class="qzbfqsbfy"/><path clip-rule="evenodd" class="q_n0noqey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:gonorrhea-outline-24px"} {...others} />);
}

export default Component;
