import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4twacccu.css';
import '../../css/v/vm32y5bcp.css';
import '../../css/p/p08x5tbis.css';
import '../../css/r/rbd59kb7g.css';
import '../../css/w/wgj9pd01c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f4twacccu"/><path class="vm32y5bcp"/><path class="p08x5tbis"/><rect class="rbd59kb7g"/><rect class="wgj9pd01c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:mold"} {...others} />);
}

export default Component;
