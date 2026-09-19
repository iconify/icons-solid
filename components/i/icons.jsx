import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpeakr04t.css';
import '../../css/z/zdr2so73c.css';
import '../../css/p/pi0obnw5p.css';
import '../../css/z/zf_qj8moa.css';
import '../../css/s/s0xfuz19y.css';
import '../../css/c/chzoiac_z.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dpeakr04t"/><path class="zdr2so73c"/><path class="pi0obnw5p"/><path class="zf_qj8moa"/><path class="s0xfuz19y"/><path class="chzoiac_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:icons"} {...others} />);
}

export default Component;
