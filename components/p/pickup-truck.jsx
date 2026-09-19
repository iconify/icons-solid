import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pia-hubos.css';
import '../../css/n/nhxr2-s-n.css';
import '../../css/p/p7o08abcn.css';
import '../../css/r/r71b2llug.css';
import '../../css/l/l3h-_mbhd.css';
import '../../css/a/aqsiimbuq.css';
import '../../css/p/pizwi43ni.css';
import '../../css/e/efrzo3u2f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pia-hubos"/><path clip-rule="evenodd" class="nhxr2-s-n"/><path class="p7o08abcn"/><path clip-rule="evenodd" class="r71b2llug"/><path class="l3h-_mbhd"/><path clip-rule="evenodd" class="aqsiimbuq"/><path class="pizwi43ni"/><path class="efrzo3u2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pickup-truck"} {...others} />);
}

export default Component;
