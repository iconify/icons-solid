import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fsbf-1cah.css';
import '../../css/x/xezismare.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fsbf-1cah"/><path clip-rule="evenodd" class="xezismare"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:speech-bubble-quote"} {...others} />);
}

export default Component;
