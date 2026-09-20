import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smh5sw4zp.css';
import '../../css/r/rkod--bez.css';
import '../../css/r/rho1edcfy.css';
import '../../css/d/d_9gsbc0x.css';
import '../../css/b/bhj5zjbaa.css';
import '../../css/b/bydt43bce.css';
import '../../css/s/sbxntgb3p.css';
import '../../css/t/tfm_hqr6l.css';
import '../../css/c/cd1ml4_iw.css';
import '../../css/u/uu95pmbwl.css';
import '../../css/s/syyrs4-qo.css';
import '../../css/u/u8hql9bmj.css';
import '../../css/u/upfwourpu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="smh5sw4zp"/><path class="rkod--bez"/><path class="rho1edcfy"/><path class="d_9gsbc0x"/><path class="bhj5zjbaa"/><path class="bydt43bce"/><path class="sbxntgb3p"/><path class="tfm_hqr6l"/><linearGradient id="SVGRuUTDeAm" x1="45.489" x2="216.395" y1="1366.036" y2="1070.033" gradientTransform="matrix(1 0 0 -1 0 1474)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cd1ml4_iw"/><stop offset=".5" class="uu95pmbwl"/><stop offset="1" class="syyrs4-qo"/></linearGradient><path fill="url(#SVGRuUTDeAm)" class="u8hql9bmj"/><path class="upfwourpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-2018"} {...others} />);
}

export default Component;
