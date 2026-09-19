import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m8p1o2bmb.css';
import '../../css/a/a8--g49rb.css';
import '../../css/i/ikafgwboi.css';
import '../../css/q/qui1l8ncr.css';
import '../../css/n/nf77i5b4b.css';
import '../../css/c/cgn1z_bih.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m8p1o2bmb"/><path class="a8--g49rb"/><path class="ikafgwboi"/><path class="qui1l8ncr"/><path class="nf77i5b4b"/><path class="cgn1z_bih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:target-outline"} {...others} />);
}

export default Component;
