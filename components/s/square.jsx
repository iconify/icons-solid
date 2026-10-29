import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi-am0b6d.css';
import '../../css/y/ypbw_ttlv.css';
import '../../css/o/osu31q_gz.css';
import '../../css/a/ad2_zeb8h.css';
import '../../css/r/rg21m8bhx.css';
import '../../css/f/fxxy70i-n.css';
import '../../css/l/lw4nrhytu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi-am0b6d wm-shadow"/><path class="ypbw_ttlv"/><path class="osu31q_gz"/><path class="ad2_zeb8h"/><path class="rg21m8bhx"/><path class="fxxy70i-n wm-shine"/><path class="lw4nrhytu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:square"} {...others} />);
}

export default Component;
