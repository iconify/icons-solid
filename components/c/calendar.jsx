import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/ljk2r9bvb.css';
import '../../css/m/mfmssve2r.css';
import '../../css/c/cw48r1g7l.css';
import '../../css/o/o95lhhbaw.css';
import '../../css/l/lj5m0mb2p.css';
import '../../css/h/hbc3vj2lp.css';
import '../../css/i/im1tyjd8s.css';
import '../../css/f/f0yygl-7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="ljk2r9bvb"/><path class="mfmssve2r"/><path class="cw48r1g7l"/><path class="o95lhhbaw"/><path class="lj5m0mb2p"/><path class="hbc3vj2lp"/><path class="im1tyjd8s"/><path class="f0yygl-7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:calendar"} {...others} />);
}

export default Component;
