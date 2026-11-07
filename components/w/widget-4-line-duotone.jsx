import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pr05z54dz.css';
import '../../css/l/llmrhkpex.css';
import '../../css/r/r7eg7804v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pr05z54dz"/><path class="llmrhkpex"/><path class="r7eg7804v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-4-line-duotone"} {...others} />);
}

export default Component;
