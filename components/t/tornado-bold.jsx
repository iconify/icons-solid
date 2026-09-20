import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hhk_3sb_s.css';
import '../../css/n/nbsz5ubbo.css';
import '../../css/d/d3oe1fwko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hhk_3sb_s"/><path class="nbsz5ubbo"/><path clip-rule="evenodd" class="d3oe1fwko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-bold"} {...others} />);
}

export default Component;
