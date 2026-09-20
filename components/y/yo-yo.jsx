import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8km-2b6y.css';
import '../../css/s/stk4xzk_d.css';
import '../../css/q/qa1xw10ol.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/q/qsvd-_o0z.css';
import '../../css/d/dfjqi-75t.css';
import '../../css/f/f6e78wbff.css';
import '../../css/f/fx-o62biv.css';
import '../../css/u/ut7m7d43z.css';
import '../../css/l/lc0h20y3g.css';
import '../../css/h/hsoirlb_k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r8km-2b6y"/><circle class="stk4xzk_d"/><path class="qa1xw10ol"/><g class="rpvb-o6bq"><path class="qsvd-_o0z"/><circle class="dfjqi-75t"/><path class="f6e78wbff"/><path class="fx-o62biv"/><path class="ut7m7d43z"/><path class="lc0h20y3g"/><path class="hsoirlb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:yo-yo"} {...others} />);
}

export default Component;
