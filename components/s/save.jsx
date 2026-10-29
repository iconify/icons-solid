import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccxma2beb.css';
import '../../css/g/gg87x3gzy.css';
import '../../css/w/wwjaerbnf.css';
import '../../css/w/wo46ksljf.css';
import '../../css/f/fjyik6j6m.css';
import '../../css/q/qtr-rpuqp.css';
import '../../css/o/obar6_b0x.css';
import '../../css/b/bfe-92bxg.css';
import '../../css/a/abjpbyb_v.css';
import '../../css/x/xlpkd00yv.css';
import '../../css/g/g__4n8brf.css';
import '../../css/k/kvzrk7slr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ccxma2beb wm-shadow"/><path class="gg87x3gzy wm-shadow"/><path class="wwjaerbnf"/><path class="wo46ksljf"/><path class="fjyik6j6m"/><path class="qtr-rpuqp"/><path class="obar6_b0x wm-shine"/><path class="bfe-92bxg wm-shine"/><path class="abjpbyb_v"/><path class="xlpkd00yv"/><path class="g__4n8brf"/><path class="kvzrk7slr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:save"} {...others} />);
}

export default Component;
