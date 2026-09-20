import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fsewyjy.css';
import '../../css/s/sq0gg8y0j.css';
import '../../css/b/bimlar9_k.css';
import '../../css/m/m2511lbro.css';
import '../../css/e/ey12ddhym.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/m/mme8u_w1s.css';
import '../../css/n/n5hmmb36f.css';
import '../../css/w/wai09nbfk.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e3fsewyjy"><path class="sq0gg8y0j"/><path class="bimlar9_k"/><path class="m2511lbro"/><path class="ey12ddhym"/></g><g class="hzhb0bcwn"><path class="mme8u_w1s"/><path class="n5hmmb36f"/><path class="wai09nbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:card-index"} {...others} />);
}

export default Component;
