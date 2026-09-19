import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3tznumbi.css';
import '../../css/a/aed6l6n9v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="v3tznumbi"/><path clip-rule="evenodd" class="aed6l6n9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toolbox-bold"} {...others} />);
}

export default Component;
