import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfc2hsi0r.css';
import '../../css/d/drvdhitcy.css';
import '../../css/n/nhp26fw9c.css';
import '../../css/p/pfw8anbba.css';
import '../../css/r/rxv6lqe7u.css';
import '../../css/w/w6mdpix1a.css';
import '../../css/x/xlmkrkbro.css';
import '../../css/c/c2jlwccnr.css';
import '../../css/s/s0rbz_byo.css';
import '../../css/q/q5qlp6b5k.css';
import '../../css/g/g--w_-41b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sfc2hsi0r wm-shadow"/><path class="drvdhitcy wm-shadow"/><path class="nhp26fw9c"/><path class="pfw8anbba"/><path class="rxv6lqe7u"/><path class="w6mdpix1a"/><path class="wm-shine xlmkrkbro"/><path class="c2jlwccnr wm-shine"/><path class="s0rbz_byo"/><path class="q5qlp6b5k"/><path class="g--w_-41b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:toolbox"} {...others} />);
}

export default Component;
