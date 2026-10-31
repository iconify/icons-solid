import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f96v11kob.css';
import '../../css/c/clkkcmbed.css';
import '../../css/v/vidg6y-2w.css';
import '../../css/m/m7ynvdbqr.css';
import '../../css/o/or_o7bc1z.css';
import '../../css/x/xoaietwtf.css';
import '../../css/o/oh_h47b2g.css';
import '../../css/f/f8sow9a5o.css';
import '../../css/w/wvm4eqbpl.css';
import '../../css/u/uhuvn7b_l.css';
import '../../css/a/a9988rhhe.css';
import '../../css/p/p51qqtbka.css';
import '../../css/h/hxi-w9srj.css';
import '../../css/t/tgy086b1a.css';
import '../../css/m/mun1drb9s.css';
import '../../css/j/jehe7qhav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f96v11kob wm-shadow"/><path class="clkkcmbed wm-k"/><path class="vidg6y-2w wm-k"/><path class="m7ynvdbqr wm-k"/><path class="or_o7bc1z wm-k"/><path class="wm-k xoaietwtf"/><path class="oh_h47b2g wm-k"/><path class="f8sow9a5o wm-shine"/><path class="wm-a wvm4eqbpl"/><path class="uhuvn7b_l wm-a"/><path class="a9988rhhe wm-a"/><path class="p51qqtbka wm-a"/><path class="hxi-w9srj wm-a"/><path class="tgy086b1a wm-a"/><path class="mun1drb9s wm-a"/><path class="jehe7qhav wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:martini"} {...others} />);
}

export default Component;
