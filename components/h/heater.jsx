import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2-vhfb7f.css';
import '../../css/f/fmpib3brt.css';
import '../../css/b/b3g4q9b4g.css';
import '../../css/c/c_9rf4bvo.css';
import '../../css/b/byowz_qyg.css';
import '../../css/u/ul6drdbnt.css';
import '../../css/b/b9wujcc0u.css';
import '../../css/b/bhk_dwtlg.css';
import '../../css/b/b5flzx37l.css';
import '../../css/c/cmnz23p7i.css';
import '../../css/s/sck646bjh.css';
import '../../css/a/a8cg58c7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o2-vhfb7f wm-k"/><path class="fmpib3brt wm-k"/><path class="b3g4q9b4g wm-k"/><path class="c_9rf4bvo wm-k"/><path class="byowz_qyg wm-k"/><path class="ul6drdbnt wm-k"/><path class="b9wujcc0u wm-k"/><path class="bhk_dwtlg wm-shine"/><path class="b5flzx37l wm-a"/><path class="cmnz23p7i wm-s"/><path class="sck646bjh wm-s"/><path class="a8cg58c7j wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:heater"} {...others} />);
}

export default Component;
