import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxunjzb1k.css';
import '../../css/d/dw8iuk1pm.css';
import '../../css/z/zxu0nhgaq.css';
import '../../css/u/uw3_rrb-p.css';
import '../../css/v/v88blkbpf.css';
import '../../css/m/mip_lxb6j.css';
import '../../css/c/czhkk71kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxunjzb1k"/><path class="dw8iuk1pm"/><path class="zxu0nhgaq"/><path class="uw3_rrb-p"/><path class="v88blkbpf"/><path class="mip_lxb6j"/><path class="czhkk71kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:study-exam-math"} {...others} />);
}

export default Component;
