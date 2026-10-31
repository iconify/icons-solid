import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7iu01baj.css';
import '../../css/y/yg---v3yi.css';
import '../../css/w/wpyq6obyq.css';
import '../../css/a/as0-jubjr.css';
import '../../css/t/t63ylrbkg.css';
import '../../css/v/v8qfhuzdm.css';
import '../../css/n/nwv_ydl2n.css';
import '../../css/d/daa730bjc.css';
import '../../css/z/zk3nk0bzz.css';
import '../../css/i/i9-xlccfx.css';
import '../../css/o/oqke73bvj.css';
import '../../css/e/e5xqu6bnl.css';
import '../../css/n/nljb_sb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i7iu01baj wm-shadow"/><path class="wm-a yg---v3yi"/><path class="wm-a wpyq6obyq"/><path class="as0-jubjr wm-a"/><path class="t63ylrbkg wm-a"/><path class="v8qfhuzdm wm-a"/><path class="nwv_ydl2n wm-a"/><path class="daa730bjc wm-k"/><path class="wm-k zk3nk0bzz"/><path class="i9-xlccfx wm-k"/><path class="oqke73bvj wm-k"/><path class="e5xqu6bnl wm-k"/><path class="nljb_sb-a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:utensils"} {...others} />);
}

export default Component;
