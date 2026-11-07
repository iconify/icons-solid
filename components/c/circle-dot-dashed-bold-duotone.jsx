import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nro5xluyk.css';
import '../../css/t/t6sel6n5q.css';
import '../../css/o/oiungqbbv.css';
import '../../css/k/kl3pjycmd.css';
import '../../css/n/nf3vz2b9x.css';
import '../../css/u/ungd6hh5k.css';
import '../../css/l/la77mfbvu.css';
import '../../css/m/mh5yamatq.css';
import '../../css/e/er9_2_bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="nro5xluyk"/><path class="t6sel6n5q"/><path class="oiungqbbv"/><path class="kl3pjycmd"/><path class="nf3vz2b9x"/><path class="ungd6hh5k"/><path class="la77mfbvu"/><path class="mh5yamatq"/></g><path class="er9_2_bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dot-dashed-bold-duotone"} {...others} />);
}

export default Component;
