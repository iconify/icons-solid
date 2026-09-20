import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svwxlccmd.css';
import '../../css/v/vgv6clb5b.css';
import '../../css/u/u_3tuxqul.css';
import '../../css/o/ol8lldb_x.css';
import '../../css/b/b90thfbzd.css';
import '../../css/x/xda13izka.css';
import '../../css/x/x6fvrjqkx.css';

const viewBox = {"width":158,"height":60};
const content = `<defs><clipPath id="SVGVV4VQdUw"><path class="svwxlccmd"/></clipPath><clipPath id="SVGseqtkcRE"><path class="vgv6clb5b"/></clipPath><clipPath id="SVGzhUrkcMu"><path class="u_3tuxqul"/></clipPath><clipPath id="SVGJ38HmcZk"><path class="ol8lldb_x"/></clipPath></defs><g clip-path="url(#SVGVV4VQdUw)"><g clip-path="url(#SVGseqtkcRE)" transform="translate(68)"><path class="b90thfbzd"/><path class="xda13izka"/></g></g><g clip-path="url(#SVGzhUrkcMu)"><g clip-path="url(#SVGJ38HmcZk)"><path class="x6fvrjqkx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:trek"} {...others} />);
}

export default Component;
