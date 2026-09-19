import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mn8dh16fr.css';
import '../../css/w/w2t2h5o7b.css';
import '../../css/h/hwtm3tbph.css';
import '../../css/d/drkpvp2uz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mn8dh16fr"/><path clip-rule="evenodd" class="w2t2h5o7b"/><path class="hwtm3tbph"/><path clip-rule="evenodd" class="drkpvp2uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shovel-snow-outline"} {...others} />);
}

export default Component;
