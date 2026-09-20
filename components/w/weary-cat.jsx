import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeh2esmnh.css';
import '../../css/l/lk2-4_39s.css';
import '../../css/k/k0zru5bmu.css';
import '../../css/f/fhahimumt.css';
import '../../css/x/xa_k6qbuf.css';
import '../../css/r/r88dlybwq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/ajbz76bto.css';
import '../../css/q/qmyok0mgk.css';
import '../../css/c/cppjz0wlf.css';
import '../../css/n/nbyxh2hwz.css';
import '../../css/k/kl006ybks.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xeh2esmnh"/><path class="lk2-4_39s"/><ellipse class="k0zru5bmu"/><ellipse transform="rotate(-70.494 24.456 34.194)" class="fhahimumt"/><ellipse transform="rotate(-19.506 46.84 34.195)" class="xa_k6qbuf"/><path class="r88dlybwq"/><g class="ij2x_72vy"><path class="ajbz76bto"/><ellipse class="qmyok0mgk"/><ellipse transform="rotate(-70.494 24.456 34.194)" class="cppjz0wlf"/><ellipse transform="rotate(-19.506 46.84 34.195)" class="nbyxh2hwz"/><path class="kl006ybks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:weary-cat"} {...others} />);
}

export default Component;
