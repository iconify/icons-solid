import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/es9e9mblq.css';
import '../../css/z/zylhabc-w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="es9e9mblq"/><path class="zylhabc-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:save-1"} {...others} />);
}

export default Component;
