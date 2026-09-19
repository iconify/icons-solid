import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq4j_kx8n.css';
import '../../css/y/yx1cocbxe.css';
import '../../css/y/y2e4jbb1z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rq4j_kx8n"/><path class="yx1cocbxe"/><path class="y2e4jbb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:folder-open-duo"} {...others} />);
}

export default Component;
