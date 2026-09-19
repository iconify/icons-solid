import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/edoidqbii.css';
import '../../css/t/tdm7_6wok.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="edoidqbii"/><path class="tdm7_6wok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-6"} {...others} />);
}

export default Component;
