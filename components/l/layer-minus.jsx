import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xyb8xnbmc.css';
import '../../css/y/y587f1bxu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xyb8xnbmc"/><path class="y587f1bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-minus"} {...others} />);
}

export default Component;
