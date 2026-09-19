import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbx5wdb-p.css';
import '../../css/z/z3jjxtstp.css';
import '../../css/j/j2ao63bdm.css';
import '../../css/d/di5snmbsf.css';
import '../../css/u/u59g-lpiv.css';
import '../../css/n/nrtqycbpa.css';
import '../../css/x/x_2zwvhek.css';
import '../../css/f/f50nf1ctr.css';
import '../../css/z/z9rns3wvd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbx5wdb-p"/><path class="z3jjxtstp"/><path class="j2ao63bdm"/><path class="di5snmbsf"/><path class="u59g-lpiv"/><path class="nrtqycbpa"/><path class="x_2zwvhek"/><path class="f50nf1ctr"/><path class="z9rns3wvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mountainrailway"} {...others} />);
}

export default Component;
