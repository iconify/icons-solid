import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhb779nue.css';
import '../../css/g/g9wzcsquv.css';
import '../../css/b/bcsqw5n-n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="uhb779nue"/><path clip-rule="evenodd" class="g9wzcsquv"/><path class="bcsqw5n-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-sparkles-bold"} {...others} />);
}

export default Component;
