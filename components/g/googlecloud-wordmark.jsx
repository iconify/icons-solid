import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epx2zjbrs.css';
import '../../css/t/t2xnnpb2g.css';
import '../../css/q/qifgr8pul.css';
import '../../css/z/zmo714tko.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="epx2zjbrs"/><path class="t2xnnpb2g"/><path class="qifgr8pul"/><path class="zmo714tko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:googlecloud-wordmark"} {...others} />);
}

export default Component;
