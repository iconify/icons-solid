import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2gzbfbcc.css';
import '../../css/r/rw5c_lizo.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/p/pcb784b6h.css';
import '../../css/r/rgnhz_i7b.css';
import '../../css/i/ivjakbbww.css';
import '../../css/h/h1a_j2b2i.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGXUi4JSjV" x1="118.5" x2="377.85" y1="385.7" y2="126.35" gradientUnits="userSpaceOnUse"><stop offset="0" class="a2gzbfbcc"/><stop offset=".21" class="rw5c_lizo"/><stop offset=".52" class="qx32gdm7x"/><stop offset=".9" class="v9u8nhb5n"/><stop offset="1"/></linearGradient><path fill="url(#SVGXUi4JSjV)" class="pcb784b6h"/><path class="rgnhz_i7b"/><path class="ivjakbbww"/><path class="h1a_j2b2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coredns-dark"} {...others} />);
}

export default Component;
