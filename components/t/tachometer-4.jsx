import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/edoidqbii.css';
import '../../css/i/i6ehgi3yl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="edoidqbii"/><path class="i6ehgi3yl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-4"} {...others} />);
}

export default Component;
