import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cciev0bxn.css';
import '../../css/s/sgj-2603c.css';
import '../../css/b/btg-1lb1p.css';
import '../../css/t/t0ed16bea.css';
import '../../css/j/j9to8cbqw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cciev0bxn"/><path class="sgj-2603c"/><path class="btg-1lb1p"/><path class="t0ed16bea"/><path class="j9to8cbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:garage-bold"} {...others} />);
}

export default Component;
