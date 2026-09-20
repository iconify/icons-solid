import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4dgu3bmz.css';
import '../../css/r/rc4ssjb2t.css';
import '../../css/b/b0dewlb9j.css';
import '../../css/t/ts8ublgas.css';
import '../../css/d/d0u1u_bsd.css';
import '../../css/r/rvl9r8qss.css';
import '../../css/f/f4wmo7bzi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zzs92whfk.css';
import '../../css/p/pjcl49bzn.css';
import '../../css/j/j3sp5_b2j.css';
import '../../css/f/fsr9s6bhr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y4dgu3bmz"/><path class="rc4ssjb2t"/><path class="b0dewlb9j"/><path class="ts8ublgas"/><path class="d0u1u_bsd"/><path class="rvl9r8qss"/><path class="f4wmo7bzi"/><g class="ij2x_72vy"><path class="zzs92whfk"/><path class="pjcl49bzn"/><path class="j3sp5_b2j"/><path class="fsr9s6bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:printer"} {...others} />);
}

export default Component;
