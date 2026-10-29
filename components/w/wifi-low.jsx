import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bou7b3bpw.css';
import '../../css/r/rtg-sjbxe.css';
import '../../css/o/ouxopqjam.css';
import '../../css/w/we1-bqbgk.css';
import '../../css/z/z-mvysy9p.css';
import '../../css/w/wkaq8cx3h.css';
import '../../css/i/igbt7ac6v.css';
import '../../css/u/uiwfmgbax.css';
import '../../css/g/gjve06bhs.css';
import '../../css/v/v-_2dnsum.css';
import '../../css/v/vrtb94mgr.css';
import '../../css/p/pirt9wr1q.css';
import '../../css/i/iv59nac7i.css';
import '../../css/n/ntoq4pbwg.css';
import '../../css/k/kk56tmbtl.css';
import '../../css/o/o-s-3mblv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bou7b3bpw wm-shadow"/><path class="rtg-sjbxe wm-shadow"/><path class="ouxopqjam"/><path class="we1-bqbgk"/><path class="z-mvysy9p"/><path class="wkaq8cx3h"/><path class="igbt7ac6v"/><path class="uiwfmgbax"/><path class="gjve06bhs"/><path class="v-_2dnsum"/><path class="vrtb94mgr"/><path class="pirt9wr1q"/><path class="iv59nac7i"/><path class="ntoq4pbwg"/><path class="kk56tmbtl"/><path class="o-s-3mblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:wifi-low"} {...others} />);
}

export default Component;
