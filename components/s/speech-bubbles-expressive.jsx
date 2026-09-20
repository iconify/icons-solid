import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r78vfwbww.css';
import '../../css/u/u0xkfvb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r78vfwbww"/><path clip-rule="evenodd" class="u0xkfvb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:speech-bubbles-expressive"} {...others} />);
}

export default Component;
