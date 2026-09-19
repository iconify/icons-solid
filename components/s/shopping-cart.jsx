import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fhn_jab4y.css';
import '../../css/p/p1_p-fbww.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="fhn_jab4y"/><path class="p1_p-fbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-cart"} {...others} />);
}

export default Component;
