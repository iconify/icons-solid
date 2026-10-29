import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsokh9m3c.css';
import '../../css/a/ap26nwylp.css';
import '../../css/p/p1kp574bs.css';
import '../../css/f/fh-cslb-c.css';
import '../../css/y/y967vgbko.css';
import '../../css/w/wf_-g4s6h.css';
import '../../css/n/n9r6kzbyu.css';
import '../../css/v/v4cl23bdo.css';
import '../../css/c/c3oqdudfx.css';
import '../../css/g/gga29eunz.css';
import '../../css/b/bzmn0-byh.css';
import '../../css/g/gne8pucfk.css';
import '../../css/d/dp7_icb4d.css';
import '../../css/f/fmpqi1b_z.css';
import '../../css/g/gsq2-1uol.css';
import '../../css/x/xf5vujjkh.css';
import '../../css/r/rejcetbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsokh9m3c wm-shadow"/><path class="ap26nwylp wm-a"/><path class="p1kp574bs wm-a"/><path class="fh-cslb-c wm-a"/><path class="wm-a y967vgbko"/><path class="wf_-g4s6h wm-k"/><path class="n9r6kzbyu wm-k"/><path class="v4cl23bdo wm-k"/><path class="c3oqdudfx wm-k"/><path class="gga29eunz wm-shine"/><path class="bzmn0-byh wm-k"/><path class="gne8pucfk wm-a"/><path class="dp7_icb4d wm-a"/><path class="fmpqi1b_z wm-a"/><path class="gsq2-1uol wm-a"/><path class="wm-a xf5vujjkh"/><path class="rejcetbrr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:dental-chair"} {...others} />);
}

export default Component;
