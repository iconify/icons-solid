import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w-hxk767e.css';
import '../../css/u/uw-n9cbom.css';
import '../../css/h/h35g33bej.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="w-hxk767e"/><path class="uw-n9cbom"/><path class="h35g33bej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:axe"} {...others} />);
}

export default Component;
