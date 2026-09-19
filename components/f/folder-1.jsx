import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0vxb8b6n.css';
import '../../css/z/z8ia2hcik.css';
import '../../css/q/qj7vtlbpl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s0vxb8b6n"/><path class="z8ia2hcik"/><path clip-rule="evenodd" class="qj7vtlbpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:folder-1"} {...others} />);
}

export default Component;
