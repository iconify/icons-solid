import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vr9erjbbh.css';
import '../../css/v/v0hb81-cm.css';
import '../../css/e/exjm8vz_g.css';
import '../../css/y/y_aohx_bx.css';
import '../../css/f/fj1q4obrc.css';
import '../../css/t/tlx04mb0l.css';
import '../../css/b/brid6x0hw.css';
import '../../css/e/et7608vmt.css';
import '../../css/q/q826kc33e.css';
import '../../css/z/zek0hdbqa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vr9erjbbh"/><path class="v0hb81-cm"/><path class="exjm8vz_g"/><path class="y_aohx_bx"/><path class="fj1q4obrc"/><path class="tlx04mb0l"/><path class="brid6x0hw"/><path class="et7608vmt"/><path class="q826kc33e"/><path class="zek0hdbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coins-stack"} {...others} />);
}

export default Component;
