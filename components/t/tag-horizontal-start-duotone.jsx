import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1-n5on2z.css';
import '../../css/d/djs1zgads.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q1-n5on2z"/><path class="djs1zgads"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-start-duotone"} {...others} />);
}

export default Component;
