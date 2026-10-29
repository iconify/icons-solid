import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5cosbbxj.css';
import '../../css/o/octgv05wu.css';
import '../../css/z/zy0cisbjz.css';
import '../../css/i/i6eq4xbym.css';
import '../../css/v/vfp5gsbed.css';
import '../../css/z/zawr57bkj.css';
import '../../css/d/dlp40gb8x.css';
import '../../css/n/no5d4ib3m.css';
import '../../css/l/lgjsttccr.css';
import '../../css/m/mo7m1qb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q5cosbbxj wm-k"/><path class="octgv05wu wm-k"/><path class="wm-k zy0cisbjz"/><path class="i6eq4xbym wm-a"/><path class="vfp5gsbed wm-a"/><path class="wm-a zawr57bkj"/><path class="dlp40gb8x wm-k"/><path class="no5d4ib3m wm-k"/><path class="lgjsttccr wm-k"/><path class="mo7m1qb9e wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:person-swimming"} {...others} />);
}

export default Component;
