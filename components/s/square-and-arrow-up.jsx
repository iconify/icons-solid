import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi3oj6bfl.css';
import '../../css/q/q1w9wfbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zi3oj6bfl"/><path class="q1w9wfbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:square-and-arrow-up"} {...others} />);
}

export default Component;
