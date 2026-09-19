import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf36wsnug.css';
import '../../css/n/nf96soofn.css';
import '../../css/q/qbl80ob0j.css';
import '../../css/i/ive1xhxje.css';
import '../../css/n/nz9vxcc1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rf36wsnug"/><path class="nf96soofn"/><path class="qbl80ob0j"/><path class="ive1xhxje"/><path class="nz9vxcc1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rural-post-24px"} {...others} />);
}

export default Component;
