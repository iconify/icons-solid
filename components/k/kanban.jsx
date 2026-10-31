import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xppejxbig.css';
import '../../css/p/p8-7hb3xa.css';
import '../../css/a/a3x_llbut.css';
import '../../css/v/v_f1mqb1x.css';
import '../../css/w/wk48791is.css';
import '../../css/a/abi7po1ia.css';
import '../../css/d/dct558bdq.css';
import '../../css/p/p8ljzxbms.css';
import '../../css/v/vvc-x851m.css';
import '../../css/c/cb169sbrs.css';
import '../../css/u/uedt1qlxu.css';
import '../../css/p/pu4ysm3cl.css';
import '../../css/x/xu88w6bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xppejxbig"/><path class="p8-7hb3xa wm-k"/><path class="a3x_llbut wm-k"/><path class="v_f1mqb1x wm-k"/><path class="wk48791is wm-k"/><path class="abi7po1ia wm-k"/><path class="dct558bdq wm-shine"/><path class="p8ljzxbms wm-a"/><path class="vvc-x851m wm-a"/><path class="cb169sbrs wm-a"/><path class="uedt1qlxu wm-a"/><path class="pu4ysm3cl wm-a"/><path class="wm-a xu88w6bgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:kanban"} {...others} />);
}

export default Component;
