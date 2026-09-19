import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efh70xbdi.css';
import '../../css/h/hk9y0zedv.css';
import '../../css/i/i0_oy7bap.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="efh70xbdi"/><path class="hk9y0zedv"/><path class="i0_oy7bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dice"} {...others} />);
}

export default Component;
