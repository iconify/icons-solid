import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g53eo1eqr.css';
import '../../css/w/w3_8jspbn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="g53eo1eqr"/><path class="w3_8jspbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:music-note-single"} {...others} />);
}

export default Component;
