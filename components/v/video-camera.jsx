import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5j0bvxjx.css';
import '../../css/i/ia88n6bzf.css';
import '../../css/p/pb40astug.css';
import '../../css/y/y0dkx_1yo.css';
import '../../css/b/bvzssel2h.css';
import '../../css/v/vdyltbb3e.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/gt7_brmmj.css';
import '../../css/r/r6av3qihy.css';
import '../../css/w/wfssx5bwk.css';
import '../../css/b/bop0-yd7p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t5j0bvxjx"/><path class="ia88n6bzf"/><path class="pb40astug"/><path class="y0dkx_1yo"/><circle class="bvzssel2h"/><path class="vdyltbb3e"/><g class="ij2x_72vy"><path class="gt7_brmmj"/><path class="r6av3qihy"/><circle class="wfssx5bwk"/><path class="bop0-yd7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:video-camera"} {...others} />);
}

export default Component;
