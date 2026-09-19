import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxm8vquti.css';
import '../../css/h/hxqfdkb7h.css';
import '../../css/e/eu4j08t3g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sxm8vquti"/><path class="hxqfdkb7h"/><path class="eu4j08t3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:crown-3"} {...others} />);
}

export default Component;
