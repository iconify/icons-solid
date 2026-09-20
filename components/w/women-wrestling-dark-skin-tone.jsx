import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_raf5bng.css';
import '../../css/w/whi3c9bkk.css';
import '../../css/m/meflo9mzy.css';
import '../../css/m/mkfty-b9g.css';
import '../../css/b/b-btetb1y.css';
import '../../css/i/i2awfqcsl.css';
import '../../css/y/yll-b7bls.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wzd-utbnd.css';
import '../../css/n/nuklbdv0y.css';
import '../../css/x/xr44x3l_l.css';
import '../../css/s/sh5_nnbpe.css';
import '../../css/f/f-a8mbbam.css';
import '../../css/p/pxsuwg_vi.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e_raf5bng"><circle class="whi3c9bkk"/><path class="meflo9mzy"/><path class="mkfty-b9g"/><circle class="b-btetb1y"/><path class="i2awfqcsl"/><path class="yll-b7bls"/></g><g class="brzn_0bpr"><circle class="wzd-utbnd"/><path class="nuklbdv0y"/><path class="xr44x3l_l"/><path class="sh5_nnbpe"/><path class="f-a8mbbam"/><path class="pxsuwg_vi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:women-wrestling-dark-skin-tone"} {...others} />);
}

export default Component;
