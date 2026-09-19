import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgzt733zg.css';
import '../../css/b/b7joi2bai.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="fgzt733zg"/><path class="b7joi2bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunny-mostly"} {...others} />);
}

export default Component;
