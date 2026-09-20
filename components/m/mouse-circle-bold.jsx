import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0mu8gnlh.css';
import '../../css/i/i9mwivbls.css';
import '../../css/h/hcghnfbeu.css';
import '../../css/q/q1k9b48ek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k0mu8gnlh"/><path class="i9mwivbls"/><path class="hcghnfbeu"/><path class="q1k9b48ek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-bold"} {...others} />);
}

export default Component;
