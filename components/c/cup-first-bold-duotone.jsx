import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/k1ojr1b0y.css';
import '../../css/k/k98lz0wxp.css';
import '../../css/f/f6izpdhnc.css';
import '../../css/l/lomq3hb2b.css';
import '../../css/m/mvon9_b_f.css';
import '../../css/m/miyijf3su.css';
import '../../css/q/qo8ahtbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="k1ojr1b0y"/><path class="k98lz0wxp"/></g><path class="f6izpdhnc"/><path class="lomq3hb2b"/><path class="mvon9_b_f"/><path class="miyijf3su"/><path class="qo8ahtbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-first-bold-duotone"} {...others} />);
}

export default Component;
