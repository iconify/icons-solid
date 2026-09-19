import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_7sbmetm.css';
import '../../css/o/o63a_5bwq.css';
import '../../css/j/jm8slcb5g.css';
import '../../css/r/rvieaq00k.css';
import '../../css/z/zlswg796a.css';
import '../../css/t/t_qan_w_e.css';
import '../../css/x/xuwyo-u6t.css';
import '../../css/m/mc-1lyb9l.css';
import '../../css/n/nkp9t0_8x.css';
import '../../css/j/jzdf-ob6r.css';
import '../../css/v/vz1eupxig.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y_7sbmetm"/><path class="o63a_5bwq"/><path class="jm8slcb5g"/><path class="rvieaq00k"/><path class="zlswg796a"/><path class="t_qan_w_e"/><path class="xuwyo-u6t"/><path class="mc-1lyb9l"/><path class="nkp9t0_8x"/><path class="jzdf-ob6r"/><path class="vz1eupxig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-swimming-medium"} {...others} />);
}

export default Component;
