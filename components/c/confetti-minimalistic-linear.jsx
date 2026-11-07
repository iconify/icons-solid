import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oqo8gcgie.css';
import '../../css/l/l9fa_acaf.css';
import '../../css/n/neilwg2ov.css';
import '../../css/w/wdxo4iqka.css';
import '../../css/t/tkulpsbjv.css';
import '../../css/f/f-9xctdux.css';
import '../../css/d/dyf3d1b7m.css';
import '../../css/v/v39z71izp.css';
import '../../css/g/g8wnwcbls.css';
import '../../css/l/lxiruw8pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oqo8gcgie"/><path class="l9fa_acaf"/><path class="neilwg2ov"/><path class="wdxo4iqka"/><path class="tkulpsbjv"/><path class="f-9xctdux"/><path class="dyf3d1b7m"/><path class="v39z71izp"/><path class="g8wnwcbls"/><path class="lxiruw8pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confetti-minimalistic-linear"} {...others} />);
}

export default Component;
