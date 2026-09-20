import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nueifwbnh.css';
import '../../css/g/g1uzxeb0e.css';
import '../../css/u/uci9mmb1y.css';
import '../../css/f/f7si_cb3m.css';
import '../../css/o/obsmojblw.css';
import '../../css/l/ln32bt39q.css';
import '../../css/n/n9c-8ll2j.css';
import '../../css/g/ggjkn5klk.css';
import '../../css/s/scqxt03aq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nueifwbnh"/><path class="g1uzxeb0e"/><path class="uci9mmb1y"/><path class="f7si_cb3m"/><path class="obsmojblw"/><path class="ln32bt39q"/><path class="n9c-8ll2j"/><path class="ggjkn5klk"/><path class="scqxt03aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cilium-hubble"} {...others} />);
}

export default Component;
