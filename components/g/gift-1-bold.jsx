import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m05_vsbjb.css';
import '../../css/e/em2pzqy8n.css';
import '../../css/c/cgoh2k0px.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m05_vsbjb"/><path class="em2pzqy8n"/><path clip-rule="evenodd" class="cgoh2k0px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-1-bold"} {...others} />);
}

export default Component;
