import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p67h9fzui.css';
import '../../css/x/x3ma9xbzh.css';
import '../../css/d/dkmidwbcl.css';
import '../../css/o/oa8805bxl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p67h9fzui"/><path class="x3ma9xbzh"/><path class="dkmidwbcl"/><path class="oa8805bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volume-mute-bold"} {...others} />);
}

export default Component;
