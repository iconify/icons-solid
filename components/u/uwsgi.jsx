import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_qmb4bkl.css';
import '../../css/v/v6gcmccql.css';
import '../../css/v/vwaai8b_v.css';
import '../../css/l/ls63u72_m.css';
import '../../css/q/ql528snvi.css';
import '../../css/t/tpfxczane.css';

const viewBox = {"width":128,"height":128};
const content = `<rect class="ft5dv1b6b"/><path class="v_qmb4bkl"/><path class="v6gcmccql"/><path class="vwaai8b_v"/><path class="ls63u72_m"/><path class="ql528snvi"/><path class="tpfxczane"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uwsgi"} {...others} />);
}

export default Component;
