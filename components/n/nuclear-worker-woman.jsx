import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tts6r9bkv.css';
import '../../css/p/p4pgue3mv.css';
import '../../css/q/qqcte94di.css';
import '../../css/p/p5z_orb2o.css';
import '../../css/n/noscreppo.css';
import '../../css/u/u-pdf19ho.css';
import '../../css/f/f0dfrxgmr.css';
import '../../css/g/gesmjublq.css';
import '../../css/o/o8u57lbgd.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="tts6r9bkv"/><path class="p4pgue3mv"/><circle class="qqcte94di"/><path class="p5z_orb2o"/><path class="noscreppo"/><ellipse transform="rotate(-50 38.844 13.521)" class="u-pdf19ho"/><ellipse transform="rotate(-40 33.843 13.521)" class="f0dfrxgmr"/><circle class="gesmjublq"/><circle class="o8u57lbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nuclear-worker-woman"} {...others} />);
}

export default Component;
