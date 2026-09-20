import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwyw7jx1o.css';
import '../../css/n/n7k-g6zhx.css';
import '../../css/y/ym0264bgd.css';
import '../../css/o/osppxoobf.css';
import '../../css/q/q8oiuwb2s.css';
import '../../css/z/z8_2pvb6l.css';
import '../../css/x/x-uh1i4pz.css';
import '../../css/k/k741-7vgx.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hr9887bgz.css';
import '../../css/z/z_ce7rb9s.css';
import '../../css/v/vl3oz-gul.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lwyw7jx1o"/><path class="n7k-g6zhx"/><path class="ym0264bgd"/><path class="osppxoobf"/><path class="q8oiuwb2s"/><path class="z8_2pvb6l"/><path class="x-uh1i4pz"/><path class="k741-7vgx"/><g class="jn8qy4bru"><path class="hr9887bgz"/><path class="z_ce7rb9s"/><path class="vl3oz-gul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bicycle-helmet"} {...others} />);
}

export default Component;
