import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y87jl14sb.css';
import '../../css/y/y3-7-2bpu.css';
import '../../css/u/unfd0jl3f.css';
import '../../css/f/f9qgg66gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y87jl14sb"/><path class="y3-7-2bpu"/><path class="unfd0jl3f"/><path class="f9qgg66gu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-refresh"} {...others} />);
}

export default Component;
