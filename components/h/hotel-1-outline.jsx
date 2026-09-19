import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjqtsmahd.css';
import '../../css/j/j3db7i19m.css';
import '../../css/l/lpoyqucgp.css';
import '../../css/r/ryw9vbdrn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pjqtsmahd"/><path clip-rule="evenodd" class="j3db7i19m"/><path class="lpoyqucgp"/><path clip-rule="evenodd" class="ryw9vbdrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hotel-1-outline"} {...others} />);
}

export default Component;
