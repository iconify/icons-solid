import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f79hcz9hs.css';
import '../../css/u/u5elemb2w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="f79hcz9hs"/><path class="u5elemb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:recycle"} {...others} />);
}

export default Component;
