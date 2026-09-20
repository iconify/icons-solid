import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkysscc1f.css';
import '../../css/o/oekxvhbqn.css';
import '../../css/b/b-lymm25v.css';
import '../../css/z/zgq2xhhfn.css';
import '../../css/a/axwy74h1k.css';
import '../../css/j/jg544ccix.css';

const viewBox = {"width":976.9,"height":346.4};
const content = `<linearGradient id="SVGzLfYidUL" x1="2.964" x2="973.652" y1="172.881" y2="172.881" gradientUnits="userSpaceOnUse"><stop offset="0" class="nkysscc1f"/><stop offset=".271" class="oekxvhbqn"/><stop offset=".836" class="b-lymm25v"/><stop offset="1" class="zgq2xhhfn"/></linearGradient><path fill="url(#SVGzLfYidUL)" class="axwy74h1k"/><path class="jg544ccix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:swc"} {...others} />);
}

export default Component;
