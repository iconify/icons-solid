import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pzd0l0uzv.css';
import '../../css/s/syu4xzbkq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="pzd0l0uzv"/><path class="syu4xzbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:qr"} {...others} />);
}

export default Component;
