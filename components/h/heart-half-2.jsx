import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/auosc1aua.css';
import '../../css/c/cyngngz8q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="auosc1aua"/><path class="cyngngz8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-half-2"} {...others} />);
}

export default Component;
