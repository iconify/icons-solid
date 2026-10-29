import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r0xaomb0e.css';
import '../../css/t/t1_p0w_9n.css';
import '../../css/m/m5fq8cxcx.css';
import '../../css/e/e_ktw-3hl.css';
import '../../css/x/xgbv0g0uc.css';
import '../../css/v/vh-_yeb-y.css';
import '../../css/v/vg-9n_b0o.css';
import '../../css/g/gqsmu6t5s.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="r0xaomb0e wm-shadow"/><path class="t1_p0w_9n"/><path class="m5fq8cxcx"/><path class="e_ktw-3hl"/><path class="xgbv0g0uc"/><path class="vh-_yeb-y"/><path class="vg-9n_b0o"/><path class="gqsmu6t5s wm-shine"/><path class="wm-deco xa5pkknmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pandal"} {...others} />);
}

export default Component;
