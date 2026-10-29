import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kbitrmomw.css';
import '../../css/b/bnedambjf.css';
import '../../css/j/j928lkbbo.css';
import '../../css/o/o99tyvbtm.css';
import '../../css/l/lttt5abpi.css';
import '../../css/d/d-jqz0b_a.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kbitrmomw wm-shadow"/><path class="bnedambjf"/><path class="j928lkbbo"/><path class="o99tyvbtm"/><path class="lttt5abpi"/><path class="d-jqz0b_a wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shankh"} {...others} />);
}

export default Component;
