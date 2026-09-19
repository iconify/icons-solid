import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/es9e9mblq.css';
import '../../css/t/tn_tx9b1e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="es9e9mblq"/><path class="tn_tx9b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:save"} {...others} />);
}

export default Component;
