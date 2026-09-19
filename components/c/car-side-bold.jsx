import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2d8ur0oc.css';
import '../../css/l/ldbhdeycv.css';
import '../../css/w/w1uol0bxe.css';
import '../../css/y/y-vrt5a7c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="h2d8ur0oc"/><path clip-rule="evenodd" class="ldbhdeycv"/><path class="w1uol0bxe"/><path class="y-vrt5a7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-side-bold"} {...others} />);
}

export default Component;
