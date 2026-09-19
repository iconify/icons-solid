import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fld3w9-hc.css';
import '../../css/h/hb5jx69vg.css';
import '../../css/x/x3jgekbzb.css';
import '../../css/s/sc3qm9b1q.css';
import '../../css/p/ptavbiy3n.css';
import '../../css/r/rrot5yb8u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="fld3w9-hc"/><path class="hb5jx69vg"/><path class="x3jgekbzb"/><path class="sc3qm9b1q"/><path class="ptavbiy3n"/><path class="rrot5yb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volleyball"} {...others} />);
}

export default Component;
