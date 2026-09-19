import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z4sdxeb8i.css';
import '../../css/g/gbj84w86o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="z4sdxeb8i"/><path class="gbj84w86o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pharmacy"} {...others} />);
}

export default Component;
