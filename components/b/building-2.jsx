import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/liz8d4vbq.css';
import '../../css/l/lrwglacpj.css';
import '../../css/n/n43kf8byj.css';
import '../../css/q/qqjhi43tg.css';
import '../../css/m/muqd933pq.css';
import '../../css/s/s3nt3qb5s.css';
import '../../css/j/jgdbtftrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="liz8d4vbq wm-k"/><path class="lrwglacpj wm-deco"/><path class="n43kf8byj wm-k"/><path fill="url(#SVG8cgrrczU)" class="qqjhi43tg wm-k"/><path class="muqd933pq wm-shadow"/><path class="s3nt3qb5s wm-shine"/><path class="jgdbtftrp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:building-2"} {...others} />);
}

export default Component;
