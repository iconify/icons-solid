import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcgzw9b_g.css';
import '../../css/e/e2qiimbbs.css';
import '../../css/j/jfe31fbba.css';
import '../../css/r/rub157coi.css';
import '../../css/y/y8cx0obqj.css';
import '../../css/c/cc_wnwbwh.css';
import '../../css/l/lceuqybgb.css';
import '../../css/b/b3x0n4bxy.css';
import '../../css/m/mikpn6xiq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mcgzw9b_g"/><path class="e2qiimbbs"/><path class="jfe31fbba"/><path class="rub157coi"/><path class="y8cx0obqj"/><path class="cc_wnwbwh"/><path class="lceuqybgb"/><path class="b3x0n4bxy"/><path class="mikpn6xiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bowing"} {...others} />);
}

export default Component;
