import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdfhryrly.css';
import '../../css/c/cnam_patx.css';
import '../../css/d/d0l29qbcp.css';
import '../../css/w/wz239zbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rdfhryrly"/><path class="cnam_patx"/><path clip-rule="evenodd" class="d0l29qbcp"/><path class="wz239zbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:garage-bold-duotone"} {...others} />);
}

export default Component;
