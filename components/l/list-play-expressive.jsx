import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1w69zbku.css';
import '../../css/b/bpmq8kbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g1w69zbku"/><path class="bpmq8kbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:list-play-expressive"} {...others} />);
}

export default Component;
