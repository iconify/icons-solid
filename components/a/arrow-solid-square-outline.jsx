import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x29xhpcfs.css';
import '../../css/e/e5hrx7bil.css';
import '../../css/u/uccg2r8dc.css';
import '../../css/q/qff5zwbcp.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x29xhpcfs"/><path class="e5hrx7bil"/><path class="uccg2r8dc"/><path class="qff5zwbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-square-outline"} {...others} />);
}

export default Component;
