import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmf3tabdy.css';
import '../../css/x/x8q9c3bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kmf3tabdy"/><path class="x8q9c3bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:list-arrow-to-bottom"} {...others} />);
}

export default Component;
