import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0-ux1bvw.css';
import '../../css/l/l22prnp0x.css';
import '../../css/z/zmfcjwbzt.css';
import '../../css/q/q4tm2pwul.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d0-ux1bvw"/><path clip-rule="evenodd" class="l22prnp0x"/><path class="zmfcjwbzt"/><path clip-rule="evenodd" class="q4tm2pwul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-pad-1-outline"} {...others} />);
}

export default Component;
