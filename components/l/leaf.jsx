import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l0500fbsb.css';
import '../../css/w/wdbl9r6av.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="l0500fbsb"/><path class="wdbl9r6av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:leaf"} {...others} />);
}

export default Component;
