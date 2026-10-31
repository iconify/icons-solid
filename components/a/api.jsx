import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/exmv02byk.css';
import '../../css/a/a440wkbdr.css';
import '../../css/k/k5v7g5b_b.css';
import '../../css/e/ez4h3hbqz.css';
import '../../css/t/tryooob1v.css';
import '../../css/f/f5pq7jbnb.css';
import '../../css/e/ez3nbzqnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGoPTDMd3k" x1="10" x2="14" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="exmv02byk wm-k"/><path class="a440wkbdr wm-a"/><path fill="url(#SVGoPTDMd3k)" class="k5v7g5b_b wm-k"/><path class="ez4h3hbqz wm-a"/><path class="tryooob1v wm-shadow"/><path class="f5pq7jbnb wm-shine"/><path class="ez3nbzqnw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:api"} {...others} />);
}

export default Component;
